var readline= require('readline-sync')
const chalk = require('chalk');
var userName=readline.question("please state your name:")
console.log("Hi "+userName+"!")
console.log((chalk.blue("Welcome to How Well Do You Know Rajitha?")))
console.log("Give ur answer in the format of yes/no")
var score=0;
var currentScore;
var finalScore;
function game(question,answer)
{
  var ans=readline.question(question)
  if(ans.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("Hurray!You are Right"))
    score=score+1;
    currentScore=score;
    console.log("your current score is:"+currentScore);
    console.log(chalk.yellow.bold("---------------------------"))
  }
  else{
    console.log(chalk.red("Oops!You are wrong "))
    currentScore=score;
    console.log("your current score is:"+currentScore);
    console.log(chalk.yellow.bold("---------------------------"))
  }
}
var questions=[{
  question:"Am i older than 25?",
  answer:"no"
},{
  question:"do i prefer chocolates over cake?",
  answer:"no"
},{
  question:"is 4 my luckyno?",
  answer:"yes"},
  {
  question:"do i live in hyderabad?",
  answer:"no"},
  {
  question:"do i prefer mountains over beaches?",
  answer:"yes"},
  {
  question:"do i like pokemon?",
  answer:"yes"},
  {
  question:"is my fav color pink?",
  answer:"no"},
  {
  question:"can i swim?",
  answer:"yes"}]

for(var i=0;i<questions.length;i++){
game(questions[i].question,questions[i].answer);
}
console.log(chalk.white("Your final score is:"+score))
var highScores =[{
  name: "Rajitha",
  score: "8"
},
{
  name:"Tarun",
  score:"7"
}]
for(var j=0;j<highScores.length;j++){
 if(score > (highScores[j].score)){
console.log(chalk.blue("Wohoo! you have made it to the high score list"))
 }
}
console.log(chalk.yellow("check out the highscores below!"))
console.log((chalk.white("-----------------------------")))

 for(var j=0;j<highScores.length;j++)
 {
   finalScore=score;
   if(finalScore > (highScores[j].score))
{
  highScores[j].score =finalScore
  highScores[j].name =userName
  console.log(highScores[j].name +"\t" + "\t"+"\t"+highScores[j].score)

}
else{
 console.log(highScores[j].name +"\t" + "\t"+"\t"+highScores[j].score+"\t")
}
 }