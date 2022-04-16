//Declare variables for both the computer and the user
let player;
let computer;

//Keep track of score
let playerScore = 0
let computerScore = 0

//Establish game setting
gameCount = 1;

//Declare variables for user choices
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//Add event listeners & play a round
rock.addEventListener('click',() => {
    getChoice('rock');
    console.log('player' + playerScore + 'computer' + computerScore);
})

paper.addEventListener('click',() => {
    getChoice('paper');
    console.log('player' + playerScore + 'computer' + computerScore);
})

scissors.addEventListener('click',() => {
    getChoice('scissors');
    console.log('player' + playerScore + 'computer' + computerScore);
})


//Get computer's choice
function computerPlay() {
    let moveOptions = ['rock', 'paper', 'scissors']
    let computerMove = moveOptions[Math.floor(Math.random()*moveOptions.length)];
    return computerMove;
}
//Get player's choice
function getChoice(choice) {
    player = choice;
    computer = computerPlay()
    if(gameCount <= 4) {
        playRound(player, computer);
        gameCount += 1;
    }else {
        playRound(player, computer);
        declareWinner();
        gameReset();
    }
}

//Run the game logic after passing in computer and user selections
function playRound(playerSelection, computerSelection) {
    if(player === 'rock' && computer ==='scissors') {
        playerScore++;
        console.log('You win! Rock beats scissors.');
    }else if(player === 'rock' && computer ==='paper') {
        computerScore ++;
        console.log('You lose! Paper beats rock.');
    }else if(player === 'rock' && computer === 'rock') {
        console.log('It\'s a tie. Rock = rock.');
    }else if(player === 'paper' && computer === 'rock') {
        playerScore ++;
        console.log('You win! Paper beats rock.');
    }else if(player === 'paper' && computer === 'scissors') {
        computerScore ++;
        console.log('You lose! Scissors beats paper.');
    }else if(player === 'paper' && computer === 'paper') {
        console.log('It\s a tie. Paper = paper.');
    }else if(player === 'scissors' && computer ==='paper') {
        playerScore++;
        console.log('You win! Scissors beats paper.');
    }else if(player === 'scissors' && computer ==='rock') {
        computerScore++;
        console.log('You lose! Rock beats scissors.');
    }else if(player === 'scissors' && computer === 'scissors'){
        console.log('It\'s a tie! Scissors = scissors.');
    }else {
        console.log('Hmmm, something went wrong. Try again.');
    }
}

function declareWinner() {
    if(playerScore > computerScore) {
        alert('You\'re a winner!');
    }else if(playerScore < computerScore) {
        alert('Computer wins');
    }else{
        alert('It\'s a tie!')
    }
}

function gameReset() {
    playerScore = 0;
    computerScore = 0;
    gameCount = 1;
}


