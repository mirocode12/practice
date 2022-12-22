/** Write a function that takes an array of strings and returns an array of the strings sorted alphabetically */

function sortWords(arr) {
  return arr.sort();
}

sortWords(["banana", "apple", "cherry"]);

function sortWords(arr) {
  for (i = arr.length; i > 0; i--) {
    for (j = i - 1; j > 0; j--) {
      if (arr[i] < arr[j]) {
        let word = arr[i];
        arr[i] = arr[j];
        arr[j] = word;
      }
    }
  }
  return arr;
}

sortWords(["aaple", "mango", "banana", "apple", "cherry"]);

/** Write a function that takes in a string and returns and object with the following properties:
 * `numVowels`: the number of viwels in the string
 * `numConsonants`: the number of consonants in the string
 * `longestWord`: the longest word in the string
 */

function analyzeString(str) {
  return (
    numberOfVowels(str) + " " + numberOfConsonants(str) + " " + longestWord(str)
  );
}

function numberOfVowels(str) {
  return str.match(/[aeiou]/gi, "").length;
}

function numberOfConsonants(str) {
  return str.match(/[bcdfghjklmnpqrstvwxyz]/gi, "").length;
}

function longestWord(str) {
  let words = str.split(' ');
  let longestWord = words[0];
  words.forEach((element) => {
    if(element.length > longestWord.length){
        longestWord = element;
    }
  });
  return longestWord;
}

analyzeString("this is a test.");
