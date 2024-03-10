function isPalindrome(word) {
  word = word.toLowerCase();
  return word === word.split('').reverse().join('');
}

/* 
  Pseudocode:
  1. Convert the input word to lowercase to make the comparison case-insensitive.
  2. Split the word into an array of characters.
  3. Reverse the array.
  4. Join the reversed array back into a string.
  5. Check if the original word and the reversed word are equal.
  6. Return true if they are equal, false otherwise.

  Written Explanation:
  This function takes a word as input, converts it to lowercase, and then checks whether the word is a palindrome.
  It does this by splitting the word into an array of characters, reversing the array, and then joining it back into a string.
  Finally, it compares this reversed string with the original string to determine if the word is a palindrome or not.
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
