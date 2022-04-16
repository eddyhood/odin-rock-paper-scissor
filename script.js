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
        updateScoreBoard();
        displayMove(player, computer);
    }else {
        playRound(player, computer);
        displayMove(player, computer);
        updateScoreBoard();
        declareWinner();
    }
}

//Run the game logic after passing in computer and user selections
function playRound(playerSelection, computerSelection) {
    if(player === 'rock' && computer ==='scissors') {
        playerScore++;
        referee.innerText = 'You win! Rock beats scissors.';
    }else if(player === 'rock' && computer ==='paper') {
        computerScore ++;
        referee.innerText = 'You lose! Paper beats rock.';
    }else if(player === 'rock' && computer === 'rock') {
        referee.innerText = 'It\'s a tie. Rock = rock.';
    }else if(player === 'paper' && computer === 'rock') {
        playerScore ++;
        referee.innerText = 'You win! Paper beats rock.';
    }else if(player === 'paper' && computer === 'scissors') {
        computerScore ++;
        referee.innerText = 'You lose! Scissors beats paper.';
    }else if(player === 'paper' && computer === 'paper') {
        referee.innerText = 'It\s a tie. Paper = paper.';
    }else if(player === 'scissors' && computer ==='paper') {
        playerScore++;
        referee.innerText = 'You win! Scissors beats paper.';
    }else if(player === 'scissors' && computer ==='rock') {
        computerScore++;
        referee.innerText = 'You lose! Rock beats scissors.';
    }else if(player === 'scissors' && computer === 'scissors'){
        referee.innerText = 'It\'s a tie! Scissors = scissors.';
    }else {
        referee.innerText = 'Hmmm, something went wrong. Try again.';
    }
}

function declareWinner() {
    if(playerScore > computerScore) {
        gameTitle.innerText = 'You Win!'
        gameTitle.style.color = '#0D698B'
    }else if(playerScore < computerScore) {
        gameTitle.innerText = 'The Computer Wins. Try Again.'
        gameTitle.style.color = '#E34234'
    }else{
        gameTitle.innerText = 'It\'s a Tie.'
        gameTitle.style.color = 'black'
    }
}

function gameReset() {
    playerScore = 0;
    computerScore = 0;
    userMove.innerText = ''
    computerMove.innerText = ''
    referee.innerText = ''
    updateScoreBoard();
    gameCount = 1;
}


//Update the visual aspects of the game
const userScoreBoard = document.getElementById('userScoreBoard');
const computerScoreBoard = document.getElementById('computerScoreBoard');

function updateScoreBoard() {
    userScoreBoard.innerText = playerScore;
    computerScoreBoard.innerText = computerScore;
    gameTracker.innerText = 'Game ' + gameCount + ' of 5' 

}

const gameTitle = document.getElementById('gameTitle');
const gameTracker = document.getElementById('gameTracker');
const userMove = document.getElementById('userMove');
const computerMove = document.getElementById('computerMove');
const referee = document.getElementById('referee');


//set initial value of game text
gameTitle.innerText = 'Choose Your Weapon!'
gameTracker.innerText = 'Game ' + gameCount + ' of 5' 
userMove.innerText = ''
computerMove.innerText = ''
referee.innerText = ''

function displayMove(player, computer) {
    userMove.innerText = player;
    computerMove.innerText = computer;
}


const resetButton = document.querySelector('button');

resetButton.addEventListener('click', () => {
    gameReset();
})
