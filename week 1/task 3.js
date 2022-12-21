/** Write a function called `sumArray` that take in ad array of numbers and returns the sum of all the numbers in the array */

function sumArray(arr) {
  return arr.reduce((acc, cur) => acc + cur);
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([10, 20, 30]));
console.log(sumArray([-1, -2, -3, -4]));

/** Write a function called `isPalindrome` that takes in a string and returns 'true' if string
 * is a palindrome and false if its not
 */

function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  for (i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

isPalindrome("racecar"); // true
isPalindrome("hello"); // false
isPalindrome("A man a plan a canal Panama"); // true

/** Write a function called `getFactors` that takes in a number and returns an
 * array containing all of the factors of that number
 */

function getFactors(number) {
  let factors = [];
  for (i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

getFactors(12); // returns [1, 2, 3, 4, 6, 12]
getFactors(18); // returns [1, 2, 3, 6, 9, 18]
getFactors(30); // returns [1, 2, 3, 5, 6, 10, 15, 30]

function getFactors(number) {
  let factors = [];
  for (i = 1; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      factors.push(i);
      if (number / i !== i) {
        factors.push(number / i);
      }
    }
  }
  return factors;
}

getFactors(90); // returns [1, 90, 2, 45, 3, 30, 5, 18, 6, 15, 9, 10]

/** Write a function called `findlongestPalindrome` that takes in a string and returns the
 * longest palindrome in the string. If there are multiple palindromes of the same lenth, the
 * function should return the first one that it finds.
 */

function findlongestPalindrome(str) {
  let longestPalindrome = "";
  if (isPalindrome(str)) {
    return str;
  } else {
    let words = str.split(" ");
    let palindromes = words.filter((word) => isPalindrome(word));
    if (palindromes.length !== 0) {
      palindromes.forEach((word) => {
        if (word.length > longestPalindrome.length) {
          longestPalindrome = word;
        }
      });
    }
  }
  return longestPalindrome;
}

findlongestPalindrome("racecar is the best car");
findlongestPalindrome("racecar is the best baraccarab");
