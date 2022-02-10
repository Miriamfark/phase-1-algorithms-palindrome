function isPalindrome(word) {
 const wordReversed = word.split("").reverse().join("")
  return word === wordReversed  
}

  // Write your algorithm here


/* 
  Take in a string as an arguement.
  create a new variable of the string separated into an array of characters, reverse the characters and join them back into a string.
  compare new string with original string.
  return true if the same, false if not.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


