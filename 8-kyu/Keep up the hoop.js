// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
   if (n >= 10) {
       return "Great, now move on to tricks";
   } else {
       return "Keep at it until you get it";
   }
}

// Examples of how it works:
console.log(hoopCount(11)); // Returns: "Great, now move on to tricks"
console.log(hoopCount(6));  // Returns: "Keep at it until you get it"

// breaking the problem down step by step. I started by understanding what the function needs to do, then used an if/else statement to handle the different outcomes. It’s helping me get more comfortable with JavaScript logic and problem-solving.


