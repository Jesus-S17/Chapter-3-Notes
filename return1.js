const readline = require('readline-sync');
console.log(nameSwapper());

function nameSwapper(){
    let first = readline.question("First Name");
    let last  = readline.question("Last Name");
    return (`${last}, ${first}`);
}

//2
function numGen(){
    let num1 = readline.question( "Number One: ");
    let num2 = readline.question("Number Two: ");
    return(`${num1}${num2}`)
}
console.log(numGen()); 

//3
// function tempa(d1, d2, d3, d4, d5, d6, d7){
// console.log(`${d1} + ${d2} + ${d3} + ${d4} + ${d5} + ${d6} + ${d7} / 14 = ${d1 + d2 + d3 + d4 + d5 + d6 + d7 + 45 + 32 + 36 + 46 + 44 + 43 + 44 * 0.001}`);
// }
// tempa(80, 78, 54, 67, 65, 51, 43);
//
// //4
// function sum(num, num2, num3){
// console.log(`${num} + ${num2} + ${num3} = ${num + num2 + num3}`);
// } sum(450, 300, 500);
// let sum1 = 1250;
// if (sum1 > 1000){
// console.log(sum1 * 2);
// console.log(`The charity will receive $2500`)}
// else if(sum1 > 2000){
// console.log(sum1 * 2);
// }