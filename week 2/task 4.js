/** You are given a 0-indexed string word, consisting of lowercase English letters. 
 * You need to select one index and remove the letter at that index from word so 
 * that the frequency of every letter present in word is equal.

Return true if it is possible to remove one letter so that the frequency of all 
letters in word are equal, and false otherwise.
 */

/** Idea here is to first create object `letters` and set each letter in word as key
 * of that object and count how many of each letters are in word and set that as value
 * of `letters` object.
 * example {a: 3, b: 2, c: 2}
 * Next create new object `noOfLetters` and set keys as values of `letters` and values of 
 * `noOfLetters` as how many words are there with that many letters;
 * example {2: 2, 3: 1}.
 * next is just if else 
 */
function equalFrequency(word) {
  let letters = {};
  for (i = 0; i < word.length; i++) {
    if (!letters[word[i]]) {
      letters[word[i]] = 1;
    } else {
      letters[word[i]]++;
    }
  }
 console.log(letters);
  let noOfLetters = {};
  for (const key in letters) {
    if (!noOfLetters[letters[key]]) {
      noOfLetters[letters[key]] = 1;
    } else {
      noOfLetters[letters[key]]++;
    }
  }
  console.log(noOfLetters);
  let keys = Object.keys(noOfLetters);
  if (keys.length === 2) {
    if (noOfLetters[keys[1]] == 1 && keys[1] - 1 == keys[0]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

equalFrequency("aaabbbcc");