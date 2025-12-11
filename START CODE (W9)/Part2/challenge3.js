// Calculate the average grade of a list of students
function calc_average(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    const average = sum / array.length;
    return average;
}

let arr1 = [85, 90, 78, 92];
let arr2 = [10, 20, 30];
let arr3 = [];

console.log(`Case 1: ${calc_average(arr1)}`);
console.log(`Case 2: ${calc_average(arr2)}`);
console.log(`Case 3: ${calc_average(arr3)}`);


