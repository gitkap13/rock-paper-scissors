
let winCount = 0
let loseCount = 0
let drawCount = 0
const buttons = document.querySelector('#buttons')
const results = document.querySelector('#results')
const score = document.querySelector('#score')
score.textContent = `Wins: ${winCount}, Losses: ${loseCount}, Draws: ${drawCount}`

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
    computerSelection = getComputerChoice()
    let drawMessage = "It's a draw!"
    let winningMessage = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`
    let losingMessage = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`
    let final_result = ""
    if (winCount => 5) {
        final_result = "You win!"
    }
    else if (loseCount => 5) {
        final_result = "You lose!"
    }
    if (winCount < 5 && loseCount < 5) {
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
    else {
        return `Game over! ${final_result}`
    }
}

buttons.addEventListener('click', function(e) {
    results.textContent = playRound(e.target.id);
    score.textContent = `Wins: ${winCount}, Losses: ${loseCount}, Draws: ${drawCount}`
})
