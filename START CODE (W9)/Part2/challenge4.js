// Count how many times a character appears in string

function countChar(str, char){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === char) count++;
    }
    return count;
}

let text1 = "hello world";
let char1 = 'o';

let text2 = "aaa bbb a";
let char2 = 'a';

let text3 = "abc";
let char3 = 'd';

console.log(`Case 1: ${countChar(text1, char1)}`);
console.log(`Case 2: ${countChar(text2, char2)}`);
console.log(`Case 3: ${countChar(text3, char3)}`);

