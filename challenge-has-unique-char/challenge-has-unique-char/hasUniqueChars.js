/*Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true
*/

// Write your code below

function hasUniqueChars(word) {
    let chars = true
    for (let i = 0; i < word.length - 1; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                chars = false;
            }
        }
    }
    console.log(chars)
}

hasUniqueChars("Monday")
hasUniqueChars("Mooonday")
hasUniqueChars("Bob")
