// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

const arr = [1,2,3,[5,6,8]]
console.log(Array.from(arr))
console.log(arr.slice())
console.log(arr.slice(0))
console.log([...arr])
console.log(arr.map((i) => i))
console.log(arr.filter(() => true))

