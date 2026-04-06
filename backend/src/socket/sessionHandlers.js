const supabase = require('../db/supabase');

const submissions = new Map(); // sessionId → { userId: code }

const sessionHandlers = (io, socket) => {
  // Event: 'session:submit'
  socket.on('session:submit', async ({ sessionId, userId, code }) => {
    io.to(sessionId).emit('session:submitted', { userId, timestamp: Date.now() });

    // Mark user as submitted
    if (!submissions.has(sessionId)) submissions.set(sessionId, {});
    submissions.get(sessionId)[userId] = code;

    // Check if matching session is complete (both submitted)
    const { data: session } = await supabase
      .from('sessions')
      .select('user_a_id, user_b_id')
      .eq('id', sessionId)
      .single();
    
    if (session) {
      const { user_a_id, user_b_id } = session;
      const subs = submissions.get(sessionId);
      if (subs[user_a_id] && subs[user_b_id]) {
        // Complete the session logic (or just winner_id if first)
        // For simplicity, first to submit is winner?
        const winnerId = Object.keys(subs)[0];
        const solveTimeMs = Date.now() - new Date(session.started_at).getTime();

        try {
          await supabase.from('sessions').update({
            status: 'completed',
            winner_id: winnerId,
            solve_time_ms: solveTimeMs,
            final_code: code,
            ended_at: new Date()
          }).eq('id', sessionId);

          io.to(sessionId).emit('session:complete', { winnerId, solveTimeMs });
          submissions.delete(sessionId);
        } catch (err) {
          console.error('Session Complete Save Error:', err);
        }
      }
    }
  });

  // Event: 'session:timer_expired'
  socket.on('session:timer_expired', async ({ sessionId }) => {
    io.to(sessionId).emit('session:expired');
    try {
      await supabase.from('sessions').update({ status: 'expired' }).eq('id', sessionId);
    } catch (err) {
      console.error('Session Expiry Save Error:', err);
    }
  });
};

module.exports = sessionHandlers;
