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

function playRound() {

}

function playGame() {

}