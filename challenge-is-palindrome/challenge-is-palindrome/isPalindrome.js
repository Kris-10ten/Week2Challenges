/* Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

For example:

isPalindrom("a")
// returns true

isPalindrom("noon")
// returns true

isPalindrom("hello")
// returns false

Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:
// case sensitive

isPalindrom("Racecar")
// returns false

isPalindrom("racecar")
// returns true
//function isPalindrome(word) {
  let j = word.length - 1
  for (let i = 0; i < (word.length - 1) / 2; i++) {
    if (word[i] !== word[j]) {
      return false
    }
    j--
  }
  return true
}
Write your code below */

const isPalindrom = function(word) {
    for(let i = 0; i < word.length; i++) {
        for(let j = word.length - 1; j > 0; j--) {
             if(word[i] === word[j]) {
                console.log(true)
                return true
            } else {
                console.log(false)
                return false
            }
        }
    } 
}



isPalindrom("racecar")
isPalindrom("noon")
isPalindrom("hello")