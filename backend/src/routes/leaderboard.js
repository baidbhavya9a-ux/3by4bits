const express = require('express');
const router = express.Router();
const supabase = require('../db/supabase');

// GET /api/leaderboard
router.get('/', async (req, res) => {
  try {
    const { data: leaderboard, error } = await supabase
      .from('leaderboard')
      .select('*')
      .limit(50);

    if (error) throw error;
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching leaderboard.' });
  }
});

module.exports = router;
