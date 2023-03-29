// 1
// let nums = [1, 2, 3, 4, 5];
// let newNums = [1, 2];
// console.log('if n =5: ' + nums);
// console.log('if n =2: ' + newNums);

//2
// function countUp(n){
//     if (n <= 0){
//         console.log('Invalid')
//     }
//         else( n >=0);
//     let numberList = [];
//     for (let i=1; i<=n; i++){
//         numberList.push(i);
//     }
//     console.log(numberList)
// }
// countUp(-1);

//3
let highScores = [107, 99, 98];
let newScore = 101;
let newHighScores = [];
for (let i=0; i<highScores.length; i++){
    if (highScores[i]>= newScore){
        newHighScores.push(highScores[i])
    } else{
        newHighScores.push(newScore);
        newScore=0
    }
}
console.log(newHighScores);