/* Write a function that takes a string as an argument and returns the string with all vowels removed */

function removeVowels(str){
    return str.replace(/[aeiou]/gi,"");
}

console.log(removeVowels("Hello world!"));
console.log(removeVowels("This is a test"));
console.log(removeVowels("aeiouAEIOU"));