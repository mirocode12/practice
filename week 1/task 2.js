/* Write a function that takes a string as an argument and returns the string with all vowels removed */

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("Hello world!"));
console.log(removeVowels("This is a test"));
console.log(removeVowels("aeiouAEIOU"));

/* Write a function that takes a string as an argument and returns the string with the first letter of each word capitalized */

function capitalizeWords(str) {
    /* function first split string into individual words and put those words into new array,
    that array is then reduced into one string using reduce method, during reducing each word 
    is taken and its first letter is sliced and capitalized then rest of the word is added to first
    letter */
  const splitString = str.split(" ");
  return splitString.reduce(
    (acc, word) => acc + word.slice(0, 1).toUpperCase() + word.slice(1) + " ",
    ""
  );
}

console.log(capitalizeWords("the quick brown fox"));
console.log(capitalizeWords("this is a test"));
console.log(capitalizeWords("flying parrot is lost"));

/* Write a function that takes a string as an argument and returns string with all digits removed */

function removeDigits(str) {
  /* function uses regular expression that look for digits '\d' globally 'g' in string and 
    replaces digits with nothing, eventually removing all digits from string
    */
  return str.replace(/\d/g, "");
}

console.log(removeDigits("My 3N4am32e4 i244s99 9Jo99h3n D00o5e"));
console.log(removeDigits("T5h81e 8Qu04i312c75k 8Br0o312v66n Fo993x 4J39u7mp76s"));

/* Write a function that takes a string as an argument and returns the string with 
all words longer than a given length removed.
The length of the words to be removed sgould be a parameter of the function. */

function removeLongWords(str, length) {
  /* function first splits string with " " makes new array with all words from string
     which are next filtered in a way that only shorter than given length words are saved
     or returned into new array which is finally joined together using join method*/
  return str
    .split(" ")
    .filter((word) => word.length <= length)
    .join(" ");
}

console.log(removeLongWords("The quick brown fox jumps over the lazy dog"));
