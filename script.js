function computerPlay() {
    let moveOptions = ['rock', 'paper', 'scissors']
    let computerMove = moveOptions[Math.floor(Math.random()*moveOptions.length)];
    return computerMove;
}

function gamePlay() {
    let userMove = prompt('Type: rock, paper, or scissors');
    let computerMove = computerPlay();
    if(userMove === 'rock' && computerMove ==='scissors') {
        console.log('Computer chose: scissors')
        console.log('You chose: rock')
        console.log('You win!');
    }else if(userMove === 'rock' && computerMove ==='paper') {
        console.log('Computer chose: paper')
        console.log('You chose: rock')
        console.log('You loose!');
    }else if(userMove === 'rock' && computerMove === 'rock') {
        console.log('Computer chose: rock')
        console.log('You chose: rock')
        console.log('It\'s a tie!');
    }else if(userMove === 'paper' && computerMove === 'rock') {
        console.log('Computer chose: rock')
        console.log('You chose: paper')
        console.log('You win!');
    }else if(userMove === 'paper' && computerMove === 'scissors') {
        console.log('Computer chose: scissors')
        console.log('You chose: paper')
        console.log('You loose!');
    }else if(userMove === 'paper' && computerMove === 'paper') {
        console.log('Computer chose: paper')
        console.log('You chose: paper')
        console.log('It\'s a tie!');
    }else if(userMove === 'scissors' && computerMove ==='paper') {
        console.log('Computer chose: paper')
        console.log('You chose: scissors')
        console.log('You win!');
    }else if(userMove === 'scissors' && computerMove ==='rock') {
        console.log('Computer chose: rock')
        console.log('You chose: scissors')
        console.log('You lose!');
    }else if(userMove === 'scissors' && computerMove === 'scissors'){
        console.log('Computer chose: scissors')
        console.log('You chose: scissors')
        console.log('It\'s a tie!');
    }else {
        console.log("Hmmm. Something didn't work. Try again")
    }
}

gamePlay()