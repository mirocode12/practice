/* Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array */

function sumArray(numbers){
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sumArray([1,2,3,4,5,6,7,8,9]));
console.log(sumArray([10,20,30,40,50,60,70,80,90]));

/* Write a function that takes array of people objects and returns sum of their pay */

let people = [
    {name: 'Alice', pay: 501, gender: 'F'},
    {name: 'Bob', pay: 412, gender: 'M'},
    {name: 'Charlie', pay: 439, gender: 'F'},
    {name: 'Dave', pay: 390, gender: 'M'}
];

function totalPay(eployee){
    return eployee.reduce((acc, person) => acc + person.pay, 0);
}

console.log(totalPay(people));