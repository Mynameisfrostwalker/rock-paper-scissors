// function returns either rock, paper or scissors.
function computerPlay() {
    let decider = Math.floor(Math.random() * 4)
    if (decider == 1) {
        return "rock"
    } else if (decider == 2) {
        return "paper"
    } else if (decider == 3) {
        return "scissors"
    }
}

//fuction plays one round and returns result of that round
function playRound(playerSelection, computerSelection) {
    let correctedPlayerSelection = playerSelection.toLowerCase();
    //returns result of round
    if (correctedPlayerSelection === "rock") {
        if (computerSelection === "rock") {
            alert("It's a tie")
            return "tie"
        }
        if (computerSelection === "paper") {
            alert("You lose this round! Paper beats rock!")
            return "lose"
        }
        if (computerSelection === "scissors") {
            alert("You win this round! Rock beats scissors!")
            return "win"
        }
    }
    if (correctedPlayerSelection === "paper") {
        if (computerSelection === "rock") {
            alert("You win this round! Paper beats rock")
            return "win"
        }
        if (computerSelection === "paper") {
            alert("It's a tie")
            return "tie"
        }
        if (computerSelection === "scissors") {
            alert("You lose this round! Scissors beats paper!")
            return "lose"
        }
    }
    if (correctedPlayerSelection === "scissors") {
        if (computerSelection === "paper") {
            alert("You win this round! Scissors beats paper")
            return "win"
        }
        if (computerSelection === "scissors") {
            alert("It's a tie")
            return "tie"
        }
        if (computerSelection === "rock") {
            alert("You lose this round! Rock beats scissors")
            return "lose"
        }
    }
}
// function loops 5 rounds and returns winner
function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let playerInput = prompt("What is your choice? Rock, paper or scissors?")
        let result = playRound(playerInput, computerPlay())
        if (result === "win") {
            playerScore += 1
        }
        if (result === "lose") {
            computerScore += 1
        }
    }
    if (playerScore > computerScore) {
        alert("You have defeated the computer")
    } else {
        alert("You have been utterly defeated")
    }
}

game()