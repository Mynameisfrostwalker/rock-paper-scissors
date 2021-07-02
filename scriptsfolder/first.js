 const explanationDiv = document.querySelector("div#explanation")
 const computerResults = document.querySelector("div#computerResults")
 const playerResults = document.querySelector("div#playerResults")
 const finishButton = document.querySelector("div#finishButton")
 const para = document.createElement("p")
 const parac = document.createElement("p")
 const parap = document.createElement("p")
 const finalButton = document.createElement("button")
 explanationDiv.appendChild(para)
 computerResults.appendChild(parac)
 playerResults.appendChild(parap)
 parap.classList.add('big')
 parac.classList.add('big')
 parap.textContent = "Your Score: 0"
 parac.textContent = "Enemies Score: 0"
 para.textContent = "The future of our Kingdom lies in your hands"
     // function returns either rock, paper or scissors.
 function computerPlay() {
     let decider = Math.floor(Math.random() * 4) + 1
     if (decider == 1) {
         return "rock"
     } else if (decider == 2) {
         return "paper"
     } else {
         return "scissors"
     }
 }

 //fuction plays one round and returns result of that round
 function playRound(playerSelection, computerSelection) {
     let correctedPlayerSelection = playerSelection.toLowerCase();
     //returns result of round
     if (correctedPlayerSelection === "rock") {
         if (computerSelection === "rock") {
             para.textContent = "It's a tie! Is this some sort if sign?"
             return "tie"
         }
         if (computerSelection === "paper") {
             para.textContent = "You lose this round! Paper beats rock! Maybe its our destiny to lose."
             return "lose"
         }
         if (computerSelection === "scissors") {
             para.textContent = "You win this round! Rock beats scissors! The Heavens are on our side."
             return "win"
         }
     }
     if (correctedPlayerSelection === "paper") {
         if (computerSelection === "rock") {
             para.textContent = "You win this round! Paper beats rock! Victory is near"
             return "win"
         }
         if (computerSelection === "paper") {
             para.textContent = "It's a tie! Things are looking up."
             return "tie"
         }
         if (computerSelection === "scissors") {
             para.textContent = "You lose this round! Scissors beats paper! Curse those infidels!"
             return "lose"
         }
     }
     if (correctedPlayerSelection === "scissors") {
         if (computerSelection === "paper") {
             para.textContent = "You win this round! Scissors beats paper! Victory is our divine right"
             return "win"
         }
         if (computerSelection === "scissors") {
             para.textContent = "It's a tie! The stars are clearly not aligned in our favour"
             return "tie"
         }
         if (computerSelection === "rock") {
             para.textContent = "You lose this round! Rock beats scissors! All is lost"
             return "lose"
         }
     }
 }

 function game(event) {

     while (computerScore < 5 && playerScore < 5) {
         let result = playRound(event.target.id, computerPlay())
         if (result === "tie") {
             return;
         }
         if (result === "win") {
             playerScore += 1
             parap.textContent = `Your score: ${playerScore}`;
             if (playerScore === 5) {
                 para.textContent = "You have won the battle and vanquished our enemies."
                 finishButton.appendChild(finalButton)
                 finalButton.textContent = "Restart"
                 finalButton.classList.add("submitbtn")
                 finalButton.onclick = clear;
             }
             return;
         }
         if (result === "lose") {
             computerScore = computerScore + 1
             parac.textContent = `Enemies score: ${computerScore}`;
             if (computerScore === 5) {
                 para.textContent = "You have brought shame upon your house, and ruin upon our Kingdom."
                 finishButton.appendChild(finalButton)
                 finalButton.textContent = "Restart"
                 finishButton.classList.add("submitbtn")
                 finalButton.onclick = clear;
             }
             return;
         }
     }
 }

 function clear() {
     computerScore = 0;
     playerScore = 0;
     parac.textContent = "Enemies Score: 0"
     parap.textContent = "Your Score: 0"
     para.textContent = "The future of our Kingdom lies in your hands"
     finishButton.removeChild(finalButton)
 }

 const clickableImages = document.querySelectorAll(".button")

 clickableImages.forEach((clickableImage) => {
     clickableImage.addEventListener("click", game)
 })

 let computerScore = 0;
 let playerScore = 0;