function getAge(birthdate, now = new Date()) {
  // 1. Get the raw difference in years
  let age = now.getFullYear() - birthdate.getFullYear();
  
  // 2. Check if the birthdate has happened yet in the "now" year
  const monthDiff = now.getMonth() - birthdate.getMonth();
  const dayDiff = now.getDate() - birthdate.getDate();
  
  // 3. Adjust age if "now" is ahead of or behind the birthdate
  if (age > 0) {
    // For positive aging: subtract 1 if the birth month/day hasn't arrived yet
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  } else if (age < 0) {
    // For negative aging (future birthdate): add 1 if "now" month/day is past the birth month/day
    if (monthDiff > 0 || (monthDiff === 0 && dayDiff > 0)) {
      age++;
    }
  } else {
    // If the calendar years match, ensure exact sign based on day ordering
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      return -0; // Or 0 depending on your test suite requirements
    }
  }
  
  return age;
}
