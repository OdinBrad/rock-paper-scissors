console.log("Hello World!")
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
const compChoice = getComputerChoice();
console.log(compChoice);