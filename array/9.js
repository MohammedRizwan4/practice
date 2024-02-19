// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// function swapCase(str) {
//     return str.split('').map(function (c) {
//         return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
//     }).join('');
//     }
// console.log(swapCase('The Quick Brown Fox'));

function swapCase(str){
    return str.split('').map(function(c){
        return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
    }).join('');
}

console.log(swapCase("Hello WorLD"))