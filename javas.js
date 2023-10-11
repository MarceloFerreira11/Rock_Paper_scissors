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
const playerSelection = 'pAPer';
const computerSelection = getComputerChoice();

function playRound(playerSelection,computerSelection) {
    let roundResult = ''
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
        return roundResult = 'Player wins!'
    } 
    else {
        return roundResult = 'Bot wins'
    }
}



 console.log(playRound (playerSelection,computerSelection))

 










   
