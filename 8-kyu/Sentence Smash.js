// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// function smashManual(words) {
//   let sentence = '';
  
//   for (let i = 0; i < words.length; i++) {
//     sentence += words[i] + ' ';
//   }
  
//   return sentence.trim();
// }
// Should return empty string for empty array.
// One word example should return the word
// Multiple words should be separated by spaces
// Smash came back as undefined!
// I knew i could make it much more simpler so i reread the problem all it ask 'returns the sentence'
function smash(words) {
  return words.join(' ');
}

console.log(smash(['hello', 'world', 'this', 'is', 'great'])); 
// Output: "hello world this is great"
