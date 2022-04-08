
//Generate a random move for the computer
function computerPlay() {
    let moveOptions = ['rock', 'paper', 'scissors']
    let computerMove = moveOptions[Math.floor(Math.random()*moveOptions.length)];
    return computerMove;
}

//Declare variables for both the computer and the user
let player = prompt('Type: rock, paper, or scissors').toLowerCase();
let computer = computerPlay();


//Run the game logic after passing in computer and user selections
function game(playerSelection, computerSelection) {
    if(player === 'rock' && computer ==='scissors') {
        console.log('You win! Rock beats scissors.');
    }else if(player === 'rock' && computer ==='paper') {
        console.log('You lose! Paper beats rock.');
    }else if(player === 'rock' && computer === 'rock') {
        console.log('It\'s a tie. Rock = rock.');
    }else if(player === 'paper' && computer === 'rock') {
        console.log('You win! Paper beats rock.');
    }else if(player === 'paper' && computer === 'scissors') {
        console.log('You lose! Scissors beats paper.');
    }else if(player === 'paper' && computer === 'paper') {
        console.log('It\s a tie. Paper = paper.');
    }else if(player === 'scissors' && computer ==='paper') {
        console.log('You win! Scissors beats paper.');
    }else if(player === 'scissors' && computer ==='rock') {
        console.log('You lose! Rock beats scissors.');
    }else if(player === 'scissors' && computer === 'scissors'){
        console.log('It\'s a tie! Scissors = scissors.');
    }else {
        console.log('Hmmm, something went wrong. Try again.');
    }
}

game(player, computer)

