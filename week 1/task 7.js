/** Write a function to find the longest common prefix string amongst an arrau of strings */

/**
 * `letterNum` is a number that indicate what letter is currently being checked
 * `prefix` is a string of letters that are added if they all match in each word
 * Idea here is to put while loop that will look throught letters, and inside that loop
 * put for loop that looks through each word if matches letter from previus word, if not
 * while loop stops and function return prefix, if letter matches, current letter is added
 * to prefix and `letterNum` is increased by 1.
 */
function longestPrefix(array) {
  let run = true,
    letterNum = 0,
    prefix = "";
  if (array.length > 1) {
    while (run) {
      // letters
      for (i = 0; i < array.length - 1; i++) {
        // words
        if (
          array[i][letterNum] !== array[i + 1][letterNum] ||
          array.length === letterNum
        ) {
          run = false;
          return array[0].slice(0, letterNum);
        }
      }
      letterNum++;
    }
  }
  return prefix;
}

longestPrefix(["miroslav", "miandic", "miroslav"]); // return 'mi'
longestPrefix(["miroslav", "mi", "m"]); // return 'm'
longestPrefix(["", "", ""]); // return ''
longestPrefix([""]); // return ''

/** Given a string `str` containing just characters '(, ), [, ], { and }, determine
 * if the input string is valid.
 *
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets,
 * Open brackets must be closed in correct order,
 * Every close bracket has a corresponding open bracket of the same type
 */

/** Idea here is to iterate through string characters if character is open bracket add corresponding
 * closing bracket to another array `brackets`, if bracket in string array is closing then check
 * if it matches last input in `brackets` arrray, if it doesn't match, return false, if matches
 * then remove last imput in `bracket` array with pop method and continoue looping through string array
 * until last index, once execution is out of loop it returns true if brackets array is emtpy, which
 * in this case means all string inputs are valid.
 */

function isValid(str) {
  let brackets = [];
  str = str.split("");
  for (i = 0; i < str.length; i++) {
    if (str[i] === "(") brackets.push(")");
    else if (str[i] === "[") brackets.push("]");
    else if (str[i] === "{") brackets.push("}");
    else if (brackets[brackets.length - 1] !== str[i]) return false;
    else brackets.pop();
  }
  return brackets.length === 0;
}

isValid("((()}))"); // return false
isValid("(())()[]{()}"); // returns true
