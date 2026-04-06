const express = require('express');
const router = express.Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const supabase = require('../db/supabase');
const { fetchUserRepos, fetchUserStats } = require('../services/githubService');
const { calculateSkillLevel } = require('../services/skillScorer');

require('dotenv').config();

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const JWT_SECRET = process.env.JWT_SECRET || 'devmatch_super_secret_jwt_key_change_in_prod';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// GET /api/auth/github
router.get('/github', (req, res) => {
  const redirectUri = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=read:user,user:email`;
  res.redirect(redirectUri);
});

// GET /api/auth/github/callback
router.get('/github/callback', async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code
    }, {
      headers: { Accept: 'application/json' }
    });

    const accessToken = tokenResponse.data.access_token;

    // Fetch user from github
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `token ${accessToken}` }
    });

    const githubUser = userResponse.data;

    // Analyze skills
    const repos = await fetchUserRepos(githubUser.login);
    const stats = await fetchUserStats(githubUser.login);
    const { skill_level, skill_label, primary_language } = calculateSkillLevel(repos, stats);

    // Upsert user in Supabase
    const { data: user, error } = await supabase
      .from('users')
      .upsert({
        github_id: githubUser.id,
        github_username: githubUser.login,
        avatar_url: githubUser.avatar_url,
        email: githubUser.email,
        skill_level,
        skill_label,
        primary_language,
        updated_at: new Date()
      }, { onConflict: 'github_id' })
      .select()
      .single();

    if (error) throw error;

    // Sign JWT
    const token = jwt.sign({
      userId: user.id,
      githubUsername: user.github_username,
      avatarUrl: user.avatar_url,
      skillLevel: user.skill_level,
      skillLabel: user.skill_label
    }, JWT_SECRET, { expiresIn: '7d' });

    // Set cookie
    res.cookie('devmatch_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.redirect(`${FRONTEND_URL}/dashboard`);
  } catch (err) {
    console.error('Auth Error:', err);
    res.redirect(`${FRONTEND_URL}/?error=auth_failed`);
  }
});

// GET /api/auth/me
router.get('/me', async (req, res) => {
  const token = req.cookies.devmatch_token;

  if (!token) return res.status(401).json({ message: 'Not logged in.' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', decoded.userId)
      .single();

    if (error) throw error;
    res.json(user);
  } catch (err) {
    res.status(401).json({ message: 'Invalid token.' });
  }
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.clearCookie('devmatch_token');
  res.json({ success: true });
});

module.exports = router;
