/** Write a function called `sumArray` that take in ad array of numbers and returns the sum of all the numbers in the array */

function sumArray(arr){
    return arr.reduce((acc, cur) => acc + cur);
}

console.log(sumArray([1,2,3,4]));
console.log(sumArray([10,20,30]));
console.log(sumArray([-1,-2,-3,-4]));


/** Write a function called `isPalindrome` that takes in a string and returns 'true' if string
 * is a palindrome and false if its not
 */

function isPalindrome(str){
    str = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
    for(i = 0; i < str.length / 2; i++){
        if(str[i] !== str[str.length - i - 1]){
            return false;
        }
    }
    return true;
}

isPalindrome("racecar");    // true
isPalindrome("hello");    // false
isPalindrome("A man a plan a canal Panama");    // true