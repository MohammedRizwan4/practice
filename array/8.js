// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let freq = arr.reduce(function (acc, current) {
    if(current in acc){
        acc[current]++;
    }else{
        acc[current] = 1;
    }
    return acc;
}, {})

console.log(freq)

let max = 0;
let result = '';

for(let key in freq){
    if(freq[key] > max){
        max = freq[key];
        result = key;
    }
}

console.log(`${result} comes ${max} times`)