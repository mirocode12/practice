/** Write a function that takes a string of words separated by spaces as 
 * input and returns an object with the following properties:

- The original string
- An array of all the words in the string
- An object with the count of each word in the string
- The number of words in the string
 */

function getWordInfo(str) {
    let words = str.split(" ");
    let wordCount = {};
    let noOfWords = words.length;

    words.forEach(word => {
        if(!wordCount[word]){
            wordCount[word] = 1;
        }else {
            wordCount[word]++;
        }
    });
    return {
        str,
        words,
        wordCount,
        noOfWords,
    }
}

getWordInfo("The quick brown fox jumps over the lazy dog");