function alphabetWar(fight)
{
  // 1. Create a lookup table for letter scores (Right side is negative)
  const scores = {
    'w': 4, 'p': 3, 'b': 2, 's': 1,
    'm': -4, 'q': -3, 'd': -2, 'z': -1
  };
  
  let totalScore = 0;
  
  // 2. Tally up the total score based on the characters in the fight
  for (let char of fight) {
    if (scores[char] !== undefined) {
      totalScore += scores[char];
    }
  }
  
  // 3. Determine the winner based on the final total
  if (totalScore > 0) {
    return "Left side wins!";
  } else if (totalScore < 0) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}