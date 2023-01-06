
function getComputerChoice() {
    let getIntValue = Math.floor(Math.random() * 3) + 1
    if (getIntValue === 1) {
        return "rock"
    }
    else if (getIntValue === 2) {
        return "paper"
    }
    else if (getIntValue === 3) {
        return "scissors"
    }
}



function playGame() {
    let winCount = 0
    let loseCount = 0
    let drawCount = 0

    function playRound(playerSelection, computerSelection) {
        playerSelection = prompt("Rock, paper, or scissors?")
        computerSelection = getComputerChoice()
        let drawMessage = "It's a draw!"
        let winningMessage = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`
        let losingMessage = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`
        if (playerSelection === computerSelection) {
            ++drawCount;
            return drawMessage
        }
        else if (playerSelection === "rock"){
            if (computerSelection === "paper") {
                ++loseCount;
                return losingMessage
            }
            else if (computerSelection === "scissors") {
                ++winCount;
                return winningMessage
            }
        }
        else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                ++winCount;
                return winningMessage
            }
            else if (computerSelection === "scissors") {
                ++loseCount;
                return losingMessage
            }
        }
        else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                ++winCount;
                return winningMessage
            }
            else if (computerSelection === "rock") {
                ++loseCount;
                return losingMessage
            }
        }
        else {
            return "Invalid input. Please try again."
        }
    }

    for (let i = 0; i < 5; i++) { 
        console.log(playRound())
    };

    return `Final score: You: ${winCount} Computer: ${loseCount} Draw: ${drawCount}`
}

console.log(playGame())