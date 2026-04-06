const express = require('express');
const router = express.Router();
const supabase = require('../db/supabase');
const authMiddleware = require('../middleware/auth');

// POST /api/sessions (protected)
router.post('/', authMiddleware, async (req, res) => {
  const { challenge_id } = req.body;
  try {
    const { data: session, error } = await supabase
      .from('sessions')
      .insert({
        challenge_id,
        user_a_id: req.user.userId,
        status: 'waiting',
        created_at: new Date()
      })
      .select()
      .single();

    if (error) throw error;
    res.json(session);
  } catch (err) {
    res.status(500).json({ message: 'Error creating session.' });
  }
});

// GET /api/sessions/:id (protected)
router.get('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const { data: session, error } = await supabase
      .from('sessions')
      .select('*, challenges(*), user_a:users!user_a_id(*), user_b:users!user_b_id(*)')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json(session);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching session.' });
  }
});

// PATCH /api/sessions/:id/complete (protected)
router.patch('/:id/complete', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { winner_id, solve_time_ms, final_code } = req.body;

  try {
    const { data: session, error } = await supabase
      .from('sessions')
      .update({
        status: 'completed',
        winner_id,
        solve_time_ms,
        final_code,
        ended_at: new Date()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    // Increment winner solved count
    if (winner_id) {
      await supabase.rpc('increment_solved_count', { user_id: winner_id });
    }

    res.json(session);
  } catch (err) {
    res.status(500).json({ message: 'Error completing session.' });
  }
});

module.exports = router;
