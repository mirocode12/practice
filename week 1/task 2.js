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

/* Write a function that takes a string as an argument and returns string with all digits removed */

function removeDigits(str){
        return str.replace(/\d/g, "");
}

console.log(removeDigits("My 3N4am32e4 i244s99 9Jo99h3n D00o5e"));
console.log(removeDigits("T5h81e 8Qu04i312c75k 8Br0o312v66n Fo993x 4J39u7mp76s"));




