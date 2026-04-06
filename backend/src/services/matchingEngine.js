/**
 * DevMatch matching logic.
 * Handles waiting users and pairs them by skill level and language.
 */

const waitingQueue = new Map(); // userId → { userId, socketId, skill_level, skill_label, primary_language, joinedAt }

function addToQueue(userId, socketId, userProfile) {
  waitingQueue.set(userId, {
    userId,
    socketId,
    ...userProfile,
    joinedAt: Date.now()
  });
}

function removeFromQueue(userId) {
  waitingQueue.delete(userId);
}

function findBestMatch(userId, userProfile) {
  const others = Array.from(waitingQueue.values()).filter(u => u.userId !== userId);
  if (others.length === 0) return null;

  // Sorting logic
  // Priority 1: Complementary Skill Matching (Expert ↔ Learner)
  // Priority 2: Same primary_language preferred
  // Priority 3: Longest-waiting user

  let bestMatch = null;
  let maxScore = -1;

  for (const other of others) {
    let score = 0;

    // Expert-Learner bonus (Complementary)
    const skillDiff = Math.abs(other.skill_level - userProfile.skill_level);
    if (skillDiff >= 5) score += 10; 
    else if (skillDiff >= 3) score += 5;

    // Language bonus
    if (other.primary_language === userProfile.primary_language) score += 10;

    // Longest Wait (normalized)
    const waitTime = (Date.now() - other.joinedAt) / 1000;
    score += Math.min(5, waitTime / 60); // Max 5 pts for 1hr wait

    if (score > maxScore) {
      maxScore = score;
      bestMatch = other;
    }
  }

  return bestMatch;
}

function getQueueLength() {
  return waitingQueue.size;
}

module.exports = {
  addToQueue,
  removeFromQueue,
  findBestMatch,
  getQueueLength
};
