function computerPlay() {
     play = Math.floor(Math.random()*3);
     if (play == 0) {
          return 'Rock'
     }
     else if (play == 1) {
          return 'Paper'
     }
     else {
          return 'Scissors'
     }
}