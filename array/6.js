// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

const addDash = num => {
    let result = [];
    let str = num.toString();
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
            result.push(str[i], '-')
        }
        else {
            result.push(str[i])
        }
    }
    return result.join('');
}

console.log(addDash('025468'))
console.log(addDash(36732945887346))