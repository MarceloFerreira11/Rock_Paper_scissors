// Function called getComputerChoice that randomly return "Rock""paper" or "Scissors"
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0 :
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    
    }
}
//Play a single round player vs computer and return a string that declares the winner 
const playerSelection = 'Rock';
const computerSelection = getComputerChoice();

function playRound(playerSelection,computerSelection) {
    let roundResult = ''
    if (playerSelection === computerSelection) {
        return roundResult = 'its a Tie!';
    }
    else if ( 
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper') 
    ) {
        return roundResult = 'Player wins!'
    } 
    else {
        return roundResult = 'Bot wins'
    }
}



 console.log(playRound (playerSelection,computerSelection))

 










   
