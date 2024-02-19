// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

// const last = (arr, n) => {
//     if (arr == null) return undefined;
//     if (n == null) return arr[arr.length - 1];
//     if (n < 0) return [];
//     let length = arr.length;
//     if (n > length) return arr;
//     return arr.slice(length - n, length);
// }

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2, 4, 7, 8], 6));
// console.log(last([7, 9, 0, -2], 6));

const lastSecondSolution = (arr, n) => {
    if (arr == null) return undefined;
    if (n == null) return arr[arr.length - 1];
    if (n < 0) return [];
    return arr.slice(Math.max(arr.length - n, 0))
}

console.log(lastSecondSolution([7, 9, 0, -2]));
console.log(lastSecondSolution([7, 9, 0, -2], 3));
console.log(lastSecondSolution([7, 9, 0, -2, 4, 7, 8], 6));
console.log(lastSecondSolution([7, 9, 0, -2], 6));