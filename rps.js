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

function playRound(playerSelection, computerSelection) {
     playerSelection = playerSelection.toLowerCase();
     computerSelection = computerPlay();
     if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')){
          console.log('Congrats, ' + playerSelection + ' beats ' + computerSelection + '!');
     }
     else if (playerSelection == computerSelection) {
          console.log('Tie! You both picked ' + playerSelection + '.');
     }
     else {
          console.log('Sorry, ' + computerSelection + ' beats ' + playerSelection + '.');
     }
}