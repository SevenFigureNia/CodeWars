// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  // If one flower is even and the other is odd, their remainders when divided by 2 will be different
  if (flower1 % 2 !== flower2 % 2) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
console.log(lovefunc(1, 4)); // Output: true (1 is odd, 4 is even)
console.log(lovefunc(2, 2)); // Output: false (both are even)
console.log(lovefunc(0, 1)); // Output: true (0 is even, 1 is odd)
