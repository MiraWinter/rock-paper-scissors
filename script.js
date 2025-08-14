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

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let roundCounter = 0

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

    while (roundCounter < 5) {
        let humanSelection = getHumanChoice().toLowerCase();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log("Human score: " + humanScore + "\nComputer score: " + computerScore + "\nRounds completed: " + (roundCounter+1));
        roundCounter++;
    }
}