//set constants to document elements
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

playerScore = 0;
cpuScore = 0;


//set event listeners and execute function
rockButton.addEventListener('click', () => {
     playRound('rock', computerPlay())
});
paperButton.addEventListener('click', () => {
    playRound('paper', computerPlay())
});
scissorsButton.addEventListener('click', () => {
    playRound('scissors', computerPlay())
});


//RNG for computer turn
function computerPlay() {
     play = Math.floor(Math.random()*3);
     if (play == 0) {
          return 'rock'
     }
     else if (play == 1) {
          return 'paper'
     }
     else {
          return 'scissors'
     }
}

//function to play a single round and return the results
function playRound(playerSelection, computerSelection) {
     playerSelection = playerSelection.toLowerCase();

     if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')){
          console.log('0');
          playerScore += 1;
          document.getElementById("playerScore").textContent = playerScore;
          document.getElementById("results").textContent = 'Congrats, ' + playerSelection + ' beats ' + computerSelection + '!';
          
     }
     else if (playerSelection == computerSelection) {
          console.log('1');
          document.getElementById("results").textContent = 'Tie! You both picked ' + playerSelection + '.';
     }
     else {
          cpuScore += 1;
          console.log('2');
          document.getElementById("cpuScore").textContent = cpuScore;
          document.getElementById("results").textContent = 'Sorry, ' + computerSelection + ' beats ' + playerSelection + '.';
     }

     document.getElementById("cpuSelection").textContent = computerSelection;
     document.getElementById("playerSelection").textContent = playerSelection;
     
     if ((playerScore === 5) || (cpuScore === 5)) {
          endGame(playerScore, cpuScore);
     }
}

function endGame(playerScore, cpuScore) {
     if (playerScore > cpuScore) {
          document.getElementById("results").textContent = "CONGRATS!!! You beat the CPU! Refresh to play again!"
          document.getElementById("playerScore").style.color = "green";
          document.getElementById("playerScore").style.fontWeight = "bolder";
          document.getElementById("cpuScore").style.color = "red";
          document.getElementById("rock").disabled = "true";
          document.getElementById("paper").disabled = "true";
          document.getElementById("scissors").disabled = "true";
     }
     
     else {
          document.getElementById("results").textContent = "Sorry! The CPU beat you. Refresh the game to play again."
          document.getElementById("cpuScore").style.color = "green";
          document.getElementById("cpuScore").style.fontWeight = "bolder";
          document.getElementById("playerScore").style.color = "red";
          document.getElementById("rock").disabled = "true";
          document.getElementById("paper").disabled = "true";
          document.getElementById("scissors").disabled = "true";

     }
}


/* //Old function to play 5 rounds. Only for reference now. 
function game() {
     let playerWins = 0;
     let computerWins = 0;
     for (let i = 0; i < 5; i++) {
          let playerSelection = prompt("What would you like to play? (Please choose 'rock', 'paper', or 'scissors'");
          let computerSelection = computerPlay();

          if (playRound(playerSelection, computerSelection) == 0) {
               console.log('Congrats, ' + playerSelection + ' beats ' + computerSelection + '!')
               playerWins++;
          }
          else if (playRound(playerSelection, computerSelection) == 1) {
               console.log('Tie! You both picked ' + playerSelection + '.')
          }
          else {
               console.log('Sorry, ' + computerSelection + ' beats ' + playerSelection + '.')
               computerWins++;
          }
          
     }
     if (computerWins > playerWins) {
          return 'Sorry, the computer beat you. Final score was ' + computerWins + ' to ' + playerWins + '.';
     }
     else if (playerWins > computerWins) {
          return 'Congrats! You beat the computer. Final score was ' + playerWins + ' to ' + computerWins + '.';
     }
     else {
          return 'It was a tie! You each scored ' + playerWins + '.';
     }
}
*/