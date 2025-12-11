function calculateSum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
       // Add here the calculation logic
       sum += array[i];
    }
    return sum;
}

let arr = [1, 2, 3, 4, 5];
console.log(calculateSum(arr));
