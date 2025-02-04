console.log("Rock-Paper-Scissors");

function getComputerChoice() {
    let num = Math.floor((Math.random() * 3));
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
// console.log(getComputerChoice());


function getHumanChoice () {
    let num = prompt("Please enter your choice: rock, paper or scissors:").toLowerCase();
    return num;
}
// console.log(getHumanChoice());




function playGame() {
    let humanScore = 0;
    let computerScore = 0;

        function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            return "Nobody wins!";
            }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            return "You win! Rock beats Scissors.";
            }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            return "You lose! Rock beats Scissors.";
            }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            return "You lose! Paper beats Rock.";
            }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            return "You win! Paper beats Rock.";
            }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            return "You lose! Scissors beats Paper.";
            }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            return "You lose! Scissors beats Paper.";
            }
        }
    let numRounds = 0;
    while (numRounds < 5) {
        let round = playRound(getHumanChoice(), getComputerChoice());
        console.log(round);
        numRounds += 1;
    }
    console.log("Final score: You: " + humanScore + " Computer: " + computerScore);

}
playGame();
