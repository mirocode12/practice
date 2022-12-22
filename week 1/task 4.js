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
