let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomNumber = Math.random() * 100
    if (randomNumber <= 33) {
        return "rock";
    }
    else if (randomNumber >= 34 && randomNumber <=66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("What is your choice?")
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("It's a tie!")
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"
            || humanChoice == "paper" && computerChoice == "rock"
            || humanChoice == "scissors" && computerChoice == "paper") {
        console.log("Human wins!");
        humanScore++;
    }
    else if (computerChoice == "rock" && humanChoice == "scissors"
            || computerChoice == "paper" && humanChoice == "rock"
            || computerChoice == "scissors" && humanChoice == "paper") {
        console.log("Computer wins!");
        computerScore++;
    }
    else {
        console.log("Invalid input");
    }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {

}