const readLine = require(`readline-sync`);

let answer = readLine.question("Welcome to the great fortune place. Do you want to know your fortune? yes or no: ");
while (answer != "yes" && answer != "no"){
    console.log("invalid choice");
    answer = readLine.question("Enter y or n: ");
}
let answer2 = readLine.question("Ask your question: ");



let answerList = ['It is certain.', 'Without a doubt.', 'My reply is no.', 'My sources say no.', 'Ask again later.', 'Reply hazy, try again'];

let randomNum = Math.floor(Math.random()*answerList.length);

let randomAnswer = answerList[randomNum];
console.log(randomAnswer);