
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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let winningMessage = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`
    let losingMessage = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "paper") {
            return losingMessage
        }
        else if (computerSelection === "scissors") {
            return winningMessage
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return winningMessage
        }
        else if (computerSelection === "scissors") {
            return losingMessage
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return winningMessage
        }
        else if (computerSelection === "rock") {
            return losingMessage
        }
    }
    else {
        return "Invalid input. Please try again."
    }
}
let computerSelection = getComputerChoice()
let playerSelection = "paPeR"
console.log(playRound(playerSelection, computerSelection))