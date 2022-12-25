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
  while (run) {
    // letters
    for (i = 0; i < array.length - 1; i++) {
      // words
      console.log(
        `${array[i][letterNum]} + ${array[i + 1][letterNum]} + ${array.length} `
      );
      if (array[i][letterNum] !== array[i + 1][letterNum]) {
        run = false;
        return prefix;
      }
    }
    prefix += array[i][letterNum];
    letterNum++;
  }
  return prefix;
}

longestPrefix(["miroslav", "miandic", "miroslav"]);
