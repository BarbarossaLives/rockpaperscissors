
let humanScore = 0;
let computerScore = 0;
let round = 0;


function getComputerChoice(){
    let compChoice;
    let randChoice = Math.random();
    console.log(randChoice);
    if (randChoice < .333) {
        compChoice = "rock";
    } else if (randChoice >.333 && randChoice <.666){
        compChoice = "paper";
    } else{
        compChoice = "scissors";
    }
    console.log(compChoice);
    return compChoice       
}

function getHumanChoice(){
    let humanChoice = (prompt("Please enter rock, paper or scissors"));
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    return humanChoice
}

function playround(comp,human){
    if (comp == "rock"){
        if(human == "rock"){
            console.log("tie");
        }else if (human="paper"){
            console.log("Human Wins");
            humanScore += 1;
        } else {
            console.log("Computer Wins");
            computerScore += 1;
        }
        } else if (comp == "paper"){
            if (human == "rock"){
                console.log("Computer Wins");
                computerScore += 1
            } else if (human == "paper"){
                console.log("Tie");
            } else {
                console.log("Human Wins");
                humanScore += 1;
            }
        }else {
            if (human == "rock"){
                console.log("Human Wins");
                humanScore += 1;
            } else if (human == "paper"){
                console.log("Computer Wins");
                computerScore += 1;
            } else {
                console.log("Tie")
            }
        }
    /*round += 1*/
}
while (round < 11){
    let comp = getComputerChoice();

    let human = getHumanChoice();

    playround(comp,human);

    console.log(round);

    console.log(computerScore,humanScore);
}
