// Code for the Rock Paper Scissors excersis for Odin Project 


let humanScore = 0;
let computerScore = 0;
let round = 1;
let human = "";
let comp = "";
const rock_button = document.querySelector('.rock');
const paper_button = document.querySelector('.paper');
const scissors_button = document.querySelector('.scissors');

function getComputerChoice(){
    let compChoice = "";
    let randChoice = Math.random();
    console.log(randChoice);
    if (randChoice < .333){
        compChoice = "rock";
    } else if (randChoice > .333 && randChoice < .666){
        compChoice = "paper";
    } else{
        compChoice = "scissors";
    }
    console.log(compChoice)
    return compChoice
}



function playround(comp,human){
    if (comp == "rock"){
            document.getElementById("computer_choice").textContent = "ROCK";
            if(human == "rock"){
                document.getElementById("round-result").textContent = "TIE";
                console.log("tie");
                document.getElementById("human-score").textContent =humanScore;
                document.getElementById("comp-score").textContent = computerScore;
                document.getElementById("round-number").textContent = round;
            }else if (human="paper"){
                console.log("Human Wins");
                document.getElementById("round-result").textContent = "You Win!!";
                humanScore += 1;
                document.getElementById("human-score").textContent =humanScore;
                document.getElementById("comp-score").textContent = computerScore;
                document.getElementById("round-number").textContent = round;
            } else {
                document.getElementById("round-result").textContent = "You Lose!!";
                console.log("Computer Wins");
                computerScore += 1;            
                document.getElementById("human-score").textContent =humanScore;
                document.getElementById("comp-score").textContent = computerScore;
                document.getElementById("round-number").textContent = round;
            }
        } else if (comp == "paper"){
            document.getElementById("computer_choice").textContent = "PAPER";
            if (human == "rock"){
                document.getElementById("round-result").textContent = "You Lose!!";
                console.log("Computer Wins");
                computerScore += 1
                document.getElementById("human-score").textContent =humanScore;
                document.getElementById("comp-score").textContent = computerScore;
                document.getElementById("round-number").textContent = round;
            } else if (human == "paper"){
                document.getElementById("round-result").textContent = "TIE";
                console.log("Tie");
                document.getElementById("human-score").textContent =humanScore;
                document.getElementById("comp-score").textContent = computerScore;
                document.getElementById("round-number").textContent = round;
            } else {
                console.log("Human Wins");
                humanScore += 1;document.getElementById("round-result").textContent = "You Win!!"
                document.getElementById("human-score").textContent =humanScore;
                document.getElementById("comp-score").textContent = computerScore;
                document.getElementById("round-number").textContent = round;
            }
        }else {
            document.getElementById("computer_choice").textContent = "SCISSORS";
            if (human == "rock"){
                console.log("Human Wins");
                document.getElementById("round-result").textContent = "You win!!";
                humanScore += 1;
                document.getElementById("human-score").textContent = humanScore;
                document.getElementById("comp-score").textContent = computerScore;
                document.getElementById("round-number").textContent = round;
            } else if (human == "paper"){
                document.getElementById("round-result").textContent = "You Lose!!";
                console.log("Computer Wins");
                computerScore += 1;
                document.getElementById("human-score").textContent = humanScore;
                document.getElementById("comp-score").textContent = computerScore;
                document.getElementById("round-number").textContent = round;
            } else {
                console.log("Tie")
                document.getElementById("round-result").textContent = "TIE!!"
                document.getElementById("human-score").textContent =humanScore;
                document.getElementById("comp-score").textContent = computerScore;
                document.getElementById("round-number").textContent = round;
            }
        }
       
    round += 1
}

function endGame(){
    rock_button.disabled = true;
    paper_button.disabled = true;
    scissors_button.disabled = true;
    document.getElementById("round-number").textContent = "Game Over!";
}

rock_button.addEventListener('click', function () {
    if (round > 4) {
        endGame();
      }
  human = "rock";
  console.log("player choose rock");
  comp = getComputerChoice();
  console.log("The computer chooses")
  console.log (comp);
  playround(comp,human);
})


paper_button.addEventListener('click', function () {
    if (round > 4) {
        endGame();
      }
  human = "paper";
  console.log("player choose paper");
  comp = getComputerChoice();
  console.log("The computer chooses")
  console.log (comp);
  playround(comp,human);
})


scissors_button.addEventListener('click', function () {
    if (round > 4) {
        endGame();
      }
  human = "scissors";
  console.log("player choose scissors");
  comp = getComputerChoice();
  console.log("The computer chooses")
  console.log (comp);
  playround(comp,human);
})
