/**
 * DevMatch Link Engine v1.0
 * Calculates synergy between a Mission (Hackathon) and a Candidate.
 */

export interface SkillMatch {
  skill: string;
  matched: boolean;
}

export interface MatchResult {
  score: number;
  reliability: number; // 0 to 5 stars
  badge: "VETERAN" | "RISING STAR" | "MERCENARY" | "RECRUIT";
  synergyLevel: "MASTER" | "ELITE" | "SYNCED" | "POOR";
  matchedSkills: string[];
}

export function calculateMatch(
  userSkills: string[],
  candidateSkills: string[],
  requiredSkills: string[],
  candidateStars: number
): MatchResult {
  // 1. Calculate Skill Overlap
  const matched = candidateSkills.filter(s => 
    requiredSkills.some(req => req.toLowerCase().includes(s.toLowerCase()))
  );
  
  // 2. Base Score from Skill Match (up to 70 points)
  let score = (matched.length / requiredSkills.length) * 70;
  if (score > 70) score = 70;

  // 3. Reliability Bonus (from Stars)
  // 5 stars = +30 points. 1 star = 0 points.
  const reliabilityBonus = (candidateStars / 5) * 30;
  score += reliabilityBonus;

  // 4. Determine Badge Based on Stars
  let badge: MatchResult["badge"] = "RECRUIT";
  if (candidateStars >= 4.8) badge = "VETERAN";
  else if (candidateStars >= 4.2) badge = "RISING STAR";
  else if (candidateStars >= 3.0) badge = "MERCENARY";

  // 5. Determine Synergy Level
  let synergyLevel: MatchResult["synergyLevel"] = "POOR";
  if (score >= 90) synergyLevel = "MASTER";
  else if (score >= 75) synergyLevel = "ELITE";
  else if (score >= 50) synergyLevel = "SYNCED";

  return {
    score: Math.min(100, Math.round(score)),
    reliability: candidateStars,
    badge,
    synergyLevel,
    matchedSkills: matched
  };
}
