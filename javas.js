// Function called getComputerChoice that randomly return "Rock""paper" or "Scissors"
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0 :
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    
    }
}
//Play a single round player vs computer and return a string that declares the winner 
let computerSelection = getComputerChoice();
function playRound(playerSelection,computerSelection) {
    let roundResult = '';
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return roundResult = 'its a Tie!';
    }
    else if ( 
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection=== 'paper') 
    ) {
        return roundResult = 'Player wins!';
    } 
    else {
        return roundResult = 'Bot wins'
    } 
}
//new function called game() to play 5 round game that keeps score and reports a winner
 function game() {
    let playerScore = 0;
    let computerScore = 0; 
    let message=''
    for (let i=1; i<=5;i++) {
        
        let playerSelection = prompt(`Round ${i}: Rock, Paper or Scissors?`);
        let roundResult = playRound(playerSelection,computerSelection);
        
        
        if (roundResult === ('Player wins!')) {
        playerScore++;
        } else if (roundResult === ('Bot wins')){
        computerScore++;
        }
        console.log(`Round ${i}: \nComputer chose ${computerSelection} \n${roundResult}`)
    }
        message = (playerScore > computerScore) ? 'You win!' :
        (playerScore < computerScore) ? 'You lose!' :
        'Draw!';
        
          return `\nEnd result:
          \nYour score: ${playerScore} \nComputer score: ${computerScore}
          \n${message}`;
 }
          console.log(game())

