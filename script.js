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

function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    
       
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            alert("Nobody wins!");
            }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            alert("You win! Rock beats Scissors.");
            }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            alert("You lose! Rock beats Scissors.");
            }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            alert("You lose! Paper beats Rock.");
            }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            alert("You win! Paper beats Rock.");
            }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            alert("You lose! Scissors beats Paper.");
            }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            alert("You win! Scissors beats Paper.");
            }
        }
    const buttonRock = document.createElement("button");
    buttonRock.textContent = "Rock";
    const buttonPaper = document.createElement("button");
    buttonPaper.textContent = "Paper";
    const buttonScissors = document.createElement("button");
    buttonScissors.textContent = "Scissors";

    const container = document.querySelector("#container");
    const score = document.querySelector("#score");
    score.textContent = "Score: You: " + humanScore + " Computer: " + computerScore;

    container.appendChild(buttonRock);
    container.appendChild(buttonPaper);
    container.appendChild(buttonScissors);

    buttonRock.addEventListener("click", () => {
        let compChoice = getComputerChoice();
        playRound("rock", compChoice);
        if (humanScore < 5 && computerScore < 5) {
            score.textContent = "Score: You: " + humanScore + " Computer: " + computerScore;
        } else {
            score.textContent = "FINAL SCORE: You: " + humanScore + " Computer: " + computerScore;
            container.removeChild(buttonPaper);
            container.removeChild(buttonRock);
            container.removeChild(buttonScissors);
        }
    });
    buttonPaper.addEventListener("click", () => {
        let compChoice = getComputerChoice();
        playRound("paper", compChoice);
        if (humanScore < 5 && computerScore < 5) {
            score.textContent = "Score: You: " + humanScore + " Computer: " + computerScore;
        } else {
            score.textContent = "FINAL SCORE: You: " + humanScore + " Computer: " + computerScore;
            container.removeChild(buttonPaper);
            container.removeChild(buttonRock);
            container.removeChild(buttonScissors);
        }
        
    });
        
    buttonScissors.addEventListener("click", () => {
        let compChoice = getComputerChoice();
        playRound("scissors", compChoice);
        if (humanScore < 5 && computerScore < 5) {
            score.textContent = "Score: You: " + humanScore + " Computer: " + computerScore;
        } else {
            score.textContent = "FINAL SCORE: You: " + humanScore + " Computer: " + computerScore;
            container.removeChild(buttonPaper);
            container.removeChild(buttonRock);
            container.removeChild(buttonScissors);
        }
        
    });
};
    
    



const gameHeader = document.querySelector("#game-header");
const gameButton = document.createElement("button");
gameButton.textContent = "Start new game";
gameHeader.appendChild(gameButton)
gameHeader.addEventListener("click", () => {
    let parent = document.getElementById("container");
    empty(parent);
    playGame();
});

