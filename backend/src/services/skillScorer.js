/**
 * Skill scoring system for DevMatch.
 * Normalized to 60 raw points, mapped to 1-10 skill levels.
 */

function calculateSkillLevel(repos, userStats) {
  let rawScore = 0;
  const breakdown = {
    repoScore: 0,
    languageScore: 0,
    starScore: 0,
    followerScore: 0,
    ageScore: 0
  };

  // 1. REPO COUNT (max 15 pts) - Only non-forked
  const nonForked = repos.filter(r => !r.fork);
  const repoCount = nonForked.length;
  if (repoCount > 30) breakdown.repoScore = 15;
  else if (repoCount > 15) breakdown.repoScore = 12;
  else if (repoCount > 5) breakdown.repoScore = 8;
  else if (repoCount > 0) breakdown.repoScore = 3;

  // 2. LANGUAGE DIVERSITY (max 10 pts)
  const languages = [...new Set(nonForked.map(r => r.language).filter(l => l))];
  const langCount = languages.length;
  if (langCount >= 6) breakdown.languageScore = 10;
  else if (langCount >= 4) breakdown.languageScore = 8;
  else if (langCount >= 2) breakdown.languageScore = 5;
  else if (langCount >= 1) breakdown.languageScore = 2;

  // 3. STAR POWER (max 15 pts)
  const starCount = nonForked.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
  if (starCount > 50) breakdown.starScore = 15;
  else if (starCount > 10) breakdown.starScore = 10;
  else if (starCount > 0) breakdown.starScore = 5;

  // 4. FOLLOWER COUNT (max 10 pts)
  const followers = userStats.followers || 0;
  if (followers > 50) breakdown.followerScore = 10;
  else if (followers > 10) breakdown.followerScore = 7;
  else if (followers > 0) breakdown.followerScore = 3;

  // 5. ACCOUNT AGE (max 10 pts)
  const createdAt = new Date(userStats.created_at);
  const years = (new Date() - createdAt) / (1000 * 60 * 60 * 24 * 365.25);
  if (years >= 5) breakdown.ageScore = 10;
  else if (years >= 3) breakdown.ageScore = 8;
  else if (years >= 1) breakdown.ageScore = 5;
  else breakdown.ageScore = 2;

  rawScore = Object.values(breakdown).reduce((acc, v) => acc + v, 0);

  // Map to 1-10
  const skill_level = Math.max(1, Math.min(10, Math.round((rawScore / 60) * 10)));

  // Label
  let skill_label = 'Learner';
  if (skill_level >= 8) skill_label = 'Expert';
  else if (skill_level >= 4) skill_label = 'Intermediate';

  // Primary language
  const langCounts = nonForked.reduce((acc, r) => {
    if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
    return acc;
  }, {});
  const primary_language = Object.keys(langCounts).reduce((a, b) => langCounts[a] > langCounts[b] ? a : b, 'JavaScript');

  return {
    skill_level,
    skill_label,
    primary_language,
    breakdown,
    rawScore
  };
}

module.exports = { calculateSkillLevel };
