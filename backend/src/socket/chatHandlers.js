const supabase = require('../db/supabase');

const chatHandlers = (io, socket) => {
  // Event: 'chat:message'
  socket.on('chat:message', async ({ sessionId, userId, body }) => {
    if (!body || body.length > 500) return;

    try {
      const { data: message, error } = await supabase
        .from('messages')
        .insert({
          session_id: sessionId,
          user_id: userId,
          body,
          created_at: new Date()
        })
        .select('*, users(github_username, avatar_url)')
        .single();
      
      if (error) throw error;
      
      io.to(sessionId).emit('chat:message', message);
    } catch (err) {
      console.error('Chat Save Error:', err);
    }
  });

  // Event: 'chat:typing'
  socket.on('chat:typing', ({ sessionId, userId, isTyping }) => {
    socket.to(sessionId).emit('chat:typing', { userId, isTyping });
  });
};

module.exports = chatHandlers;
