/** Write a function called `sumArray` that take in ad array of numbers and returns the sum of all the numbers in the array */

function sumArray(arr){
    return arr.reduce((acc, cur) => acc + cur);
}

console.log(sumArray([1,2,3,4]));
console.log(sumArray([10,20,30]));
console.log(sumArray([-1,-2,-3,-4]));
