const express = require('express');
const router = express.Router();
const supabase = require('../db/supabase');

// GET /api/challenges
router.get('/', async (req, res) => {
  try {
    const { data: challenges, error } = await supabase
      .from('challenges')
      .select('*')
      .order('difficulty', { ascending: true });

    if (error) throw error;
    res.json(challenges);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching challenges.' });
  }
});

// GET /api/challenges/:id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { data: challenge, error } = await supabase
      .from('challenges')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json(challenge);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching challenge.' });
  }
});

module.exports = router;
