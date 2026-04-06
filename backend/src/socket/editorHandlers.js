const supabase = require('../db/supabase');

const snapshotTimers = new Map(); // sessionId → timer

const editorHandlers = (io, socket) => {
  // Event: 'editor:join'
  socket.on('editor:join', async ({ sessionId, userId }) => {
    socket.join(sessionId);
    
    // Fetch latest snapshot
    const { data: snapshot } = await supabase
      .from('code_snapshots')
      .select('code')
      .eq('session_id', sessionId)
      .order('snapshot_at', { ascending: false })
      .limit(1)
      .single();

    if (snapshot) {
      socket.emit('editor:init', { code: snapshot.code });
    } else {
      // If no snapshot, get starter code
      const { data: session } = await supabase
        .from('sessions')
        .select('challenges(starter_code_js)')
        .eq('id', sessionId)
        .single();
      
      if (session) {
        socket.emit('editor:init', { code: session.challenges.starter_code_js });
      }
    }

    socket.to(sessionId).emit('session:user_joined', { userId });
  });

  // Event: 'editor:change'
  socket.on('editor:change', ({ sessionId, delta, userId }) => {
    socket.to(sessionId).emit('editor:change', { delta, userId });

    // Handle Snapshot Throttling (30s)
    if (!snapshotTimers.has(sessionId)) {
      snapshotTimers.set(sessionId, setTimeout(async () => {
        try {
          await supabase.from('code_snapshots').insert({
            session_id: sessionId,
            code: delta,
            snapshot_at: new Date()
          });
        } catch (err) {
          console.error('Snapshot Save Error:', err);
        }
        snapshotTimers.delete(sessionId);
      }, 30000));
    }
  });

  // Event: 'cursor:move'
  socket.on('cursor:move', ({ sessionId, userId, position }) => {
    socket.to(sessionId).emit('cursor:move', { userId, position });
  });

  // Event: 'editor:leave'
  socket.on('editor:leave', ({ sessionId, userId }) => {
    socket.leave(sessionId);
    socket.to(sessionId).emit('session:user_left', { userId });
  });
};

module.exports = editorHandlers;
