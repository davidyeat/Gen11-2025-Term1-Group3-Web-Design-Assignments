// Draw a rectangle in the console using stars 
function challenge1(width, height) {
    let rectangleString = '';
    // Your code
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            rectangleString += '*';
        }
        rectangleString += '\n';
    }
    return rectangleString;
}
console.log(`Case 1:\n${challenge1(3, 4)}`);
console.log(`Case 2:\n${challenge1(5, 2)}`);
console.log(`Case 3: \n${challenge1(5, -2)}`);