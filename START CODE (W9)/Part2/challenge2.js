// Reverse an array
function reverse_array(arr){
    const newArray = [];
    for(let i = arr.length - 1; i >= 0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}
let arr1 = [14, 15, 16, 20];
let arr2 = [5, 4, 3, 2, 1];
let arr3 = [];

console.log(`Original Array: ${arr1}`);
console.log(`Reversed Array: ${reverse_array(arr1)}\n`);
console.log(`Original Array: ${arr2}`);
console.log(`Reversed Array: ${reverse_array(arr2)}\n`);
console.log(`Original Array: ${arr3}`);
console.log(`Reversed Array: ${reverse_array(arr3)}`);