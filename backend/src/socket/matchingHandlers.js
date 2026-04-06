const supabase = require('../db/supabase');
const matchingEngine = require('../services/matchingEngine');

const matchingHandlers = (io, socket) => {
  // Event: 'matching:join_queue'
  socket.on('matching:join_queue', async (userProfile) => {
    const { userId } = userProfile;
    matchingEngine.addToQueue(userId, socket.id, userProfile);
    
    socket.emit('matching:queued', { 
      position: matchingEngine.getQueueLength(), 
      estimatedWait: '~30s' 
    });

    const match = matchingEngine.findBestMatch(userId, userProfile);

    if (match) {
      matchingEngine.removeFromQueue(userId);
      matchingEngine.removeFromQueue(match.userId);

      try {
        // Pick random challenge
        const { data: challenges } = await supabase.from('challenges').select('id, title').limit(10);
        const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];

        // Create Session
        const { data: session, error } = await supabase
          .from('sessions')
          .insert({
            challenge_id: randomChallenge.id,
            user_a_id: userId,
            user_b_id: match.userId,
            status: 'active',
            started_at: new Date()
          })
          .select('*, user_a:users!user_a_id(*), user_b:users!user_b_id(*)')
          .single();

        if (error) throw error;

        // Notify both sockets
        const partners = {
          [userId]: {
            username: match.github_username,
            avatarUrl: match.avatar_url,
            skillLabel: match.skill_label
          },
          [match.userId]: {
            username: userProfile.github_username,
            avatarUrl: userProfile.avatar_url,
            skillLabel: userProfile.skill_label
          }
        };

        const payload = (targetUserId) => ({
          sessionId: session.id,
          partner: partners[targetUserId],
          challengeId: randomChallenge.id,
          challengeTitle: randomChallenge.title
        });

        io.to(socket.id).emit('matching:found', payload(userId));
        io.to(match.socketId).emit('matching:found', payload(match.userId));

      } catch (err) {
        console.error('Matching Session Create Error:', err);
      }
    }
  });

  // Event: 'matching:leave_queue'
  socket.on('matching:leave_queue', ({ userId }) => {
    matchingEngine.removeFromQueue(userId);
    socket.emit('matching:left_queue');
  });

  // Socket disconnect cleanup
  socket.on('disconnect', () => {
    // Note: this should ideally check all users mapped to this socket
    // For simplicity, we just trigger queue removal if we had a mapping
  });
};

module.exports = matchingHandlers;
