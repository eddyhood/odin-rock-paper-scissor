
//Generate a random move for the computer
function computerPlay() {
    let moveOptions = ['rock', 'paper', 'scissors']
    let computerMove = moveOptions[Math.floor(Math.random()*moveOptions.length)];
    return computerMove;
}

//Declare variables for both the computer and the user
let player;
let computer;

//Keep track of score
let playerScore = 0
let computerScore = 0

//Run the game logic after passing in computer and user selections
function playRound(playerSelection, computerSelection) {
    if(player === 'rock' && computer ==='scissors') {
        playerScore++;
        return('You win! Rock beats scissors.');
    }else if(player === 'rock' && computer ==='paper') {
        computerScore ++;
        return('You lose! Paper beats rock.');
    }else if(player === 'rock' && computer === 'rock') {
        return('It\'s a tie. Rock = rock.');
    }else if(player === 'paper' && computer === 'rock') {
        playerScore ++;
        return('You win! Paper beats rock.');
    }else if(player === 'paper' && computer === 'scissors') {
        computerScore ++;
        return('You lose! Scissors beats paper.');
    }else if(player === 'paper' && computer === 'paper') {
        return('It\s a tie. Paper = paper.');
    }else if(player === 'scissors' && computer ==='paper') {
        playerScore++;
        return('You win! Scissors beats paper.');
    }else if(player === 'scissors' && computer ==='rock') {
        computerScore++;
        return('You lose! Rock beats scissors.');
    }else if(player === 'scissors' && computer === 'scissors'){
        return('It\'s a tie! Scissors = scissors.');
    }else {
        return('Hmmm, something went wrong. Try again.');
    }
}




//Game play with 5 rounds and a declared winner
function game() {
    for (let i = 0; i < 5; i++) {
        //Apply both contestant's choices
        computer = computerPlay();
    
       
        // console.log(playRound(player, computer));
        // console.log('score: Player - ' + playerScore + ', Computer - ' + computerScore)

    } if(playerScore > computerScore) {
        alert('You win! The computer feels shame.');
    }else {
        alert('The computer wins and reigns supreme!');
    }
}

// game()

//Declare variables for user choices
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//Add event listeners
rock.addEventListener('click',() => {
    player = 'rock';
})

paper.addEventListener('click',() => {
    player = 'paper';
})

scissors.addEventListener('click',() => {
    player = 'scissors';
})
