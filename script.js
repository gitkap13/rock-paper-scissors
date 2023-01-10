
let winCount = 0
let loseCount = 0
let drawCount = 0
let final_result = ""

const buttons = document.querySelector('#buttons')
const results = document.querySelector('#results')
const score = document.querySelector('#score')
score.textContent = `Wins: ${winCount}, Losses: ${loseCount}, Draws: ${drawCount}`

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    let drawMessage = "It's a draw!"
    let winningMessage = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`
    let losingMessage = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`

    if (winCount < 5 && loseCount < 5) {
        if (playerSelection === computerSelection) {
            ++drawCount;
            return drawMessage
        }
        else if ((playerSelection === "rock" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "rock")) {
                    ++loseCount
                    return losingMessage
                }
        else if ((playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
                    ++winCount
                    return winningMessage
                }
        else {
            return "Invalid input. Please try again."
        }
    }
}

buttons.addEventListener('click', function(e) {
    results.textContent = playRound(e.target.id);
    score.textContent = `Wins: ${winCount}, Losses: ${loseCount}, Draws: ${drawCount}`
    if (winCount >= 5) {
        final_result = "You win!"
        results.textContent = `Game over! ${final_result}`
        buttons.removeEventListener()
    }
    else if (loseCount >= 5) {
        final_result = "You lose!"
        results.textContent = `Game over! ${final_result}`
        buttons.removeEventListener()
    }
})
