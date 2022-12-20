/* Write a function that takes a string as an argument and returns the string with all vowels removed */

function removeVowels(str){
    return str.replace(/[aeiou]/gi,"");
}

console.log(removeVowels("Hello world!"));
console.log(removeVowels("This is a test"));
console.log(removeVowels("aeiouAEIOU"));

/* Write a function that takes a string as an argument and returns the string with the first letter of each word capitalized */

function capitalizeWords(str){
    const splitString = str.split(" ");
    return splitString.reduce((acc, word) =>
        acc + word.slice(0,1).toUpperCase() + word.slice(1) + " "
    ,"");
}

console.log(capitalizeWords("the quick brown fox"));
console.log(capitalizeWords("this is a test"));
console.log(capitalizeWords("flying parrot is lost"));
