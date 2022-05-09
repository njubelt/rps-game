//set constants to document elements
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playerScore = document.querySelector('#playerScore');
const cpuScore = document.querySelector('#cpuScore');


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
          playerScore += 
          document.getElementById("results").textContent = 'Congrats, ' + playerSelection + ' beats ' + computerSelection + '!';
     }
     else if (playerSelection == computerSelection) {
          console.log('1');
          document.getElementById("results").textContent = 'Tie! You both picked ' + playerSelection + '.';
     }
     else {
          console.log('2');
          document.getElementById("results").textContent = 'Sorry, ' + computerSelection + ' beats ' + playerSelection + '.';
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