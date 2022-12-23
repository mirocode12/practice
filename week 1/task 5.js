/** Write a function decodeMorse that takes in a string of morse code and returns the
 *  corresponding message in English. The input string will only contain morse code 
 *  characters, spaces, and underscores. Here are the rules for decoding the morse code:

Each morse code character is separated by a single space
Each word in the message is separated by a double space
An underscore represents a space in the message 
*/

function decodeMorse(code) {
  const regex = /[-. ]+$/;
  if (regex.test(code)) {
    let morseWords = code.split("  ");
    let morseLetters = morseWords.map((word) => word.split(" "));
    let word,
      words = [],
      letters = [];
    for (i = 0; i < morseLetters.length; i++) {
      for (j = 0; j < morseLetters[i].length; j++) {
        letters.push(convertLetter(morseLetters[i][j]));
      }
      word = letters.join("");
      words.push(word);
      letters = [];
    }
    console.log(words);
    return words.join(" ");
  } else {
    return code + " is not a Morse code";
  }
}

function convertLetter(letter) {
  // not sure are these real morse codes
  switch (letter) {
    case "-":
      return "T";
    case ".":
      return "E";
    case "..":
      return "I";
    case "...":
      return "S";
    case "....":
      return "H";
    case "-.":
      return "N";
    case "--":
      return "M";
    case "---":
      return "O";
    case ".--.":
      return "G";
    case ".-":
      return "A";
    case "-..":
      return "D";
    case "-.-.":
      return "C";
    case "-...":
      return "B";
    case "-..-":
      return "X";
    case "-.--":
      return "Y";
    case "--.":
      return "G";
    case "--.-":
      return "Q";
    case "--..":
      return "Z";
    case ".":
      return "E";
    case "..-":
      return "U";
    case "..-.":
      return "F";
    case "...-":
      return "V";
    case "....-":
      return "4";
    case ".....":
      return "5";
    case "-....":
      return "6";
    case "--...":
      return "7";
    case "---..":
      return "8";
    case "----.":
      return "9";
    case "-----":
      return "0";
    case ".-.":
      return "R";
    case ".--":
      return "W";
  }
}

decodeMorse("-- .. .-. ---  .. ...  -... . ... -");

/** Write a function called uniqueCharacters that takes in a string as a
 * parameter and returns a Boolean value indicating whether or not all of
 * the characters in the string are unique. Your function should ignore
 *  spaces and should be case-insensitive. */

function uniqueCharacters(str) {
  str = str.toLowerCase();
  let seenChar = {};
  for (i = 0; i < str.length; i++) {
    /* looping through all letters and if character is not seen add it to obj `seenChar`
     * as property, if character is seen return false */
    if (!seenChar.hasOwnProperty(str[i])) {
      let proName = str[i];
      seenChar[proName] = str[i];
      console.log(seenChar);
    } else {
      return false;
    }
  }
  return true;
}
uniqueCharacters("abcde"); // return true
uniqueCharacters("abcdd"); // return false

/** Write a function findDuplicate(array) that takes in an array of integers and
 * returns the first duplicate element that it encounters. If there are no
 *  duplicates, the function should return null.
 * 
 *  Use a data structure (such as an object or an array) to keep track of which
 *  elements you have seen so far */

function findDuplicate(array) {
    let dumplicates = {}, propName;
    for(i = 0; i < array.length; i++){
        propName = array[i];
        if(!dumplicates.hasOwnProperty(propName)){
            dumplicates[propName] = propName;
        }else{
            return "duplicate found: " + propName;
        }
    }
    return null;
  }

  findDuplicate([1,2,3,5,6,3,7,8,8]);
