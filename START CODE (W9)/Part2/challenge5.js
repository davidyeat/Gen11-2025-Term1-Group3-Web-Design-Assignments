// Count the number of words in a sentence
function countWords(sentence){
    let totalWords = sentence.trim().split(/\s+/);
    return totalWords.length;
}

const text1 = "hello world";
const text2 = "this is the best day";
const text3 = "a bb cc dddddd e";

console.log(countWords(text1));
console.log(countWords(text2));
console.log(countWords(text3));
