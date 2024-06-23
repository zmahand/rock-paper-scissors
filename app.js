let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let number = Math.random();
    if (number < 0.33) {
        computerChoice = 'rock';
    } else if (number < 0.66) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function getHumanChoice () {
    humanChoice = prompt('Enter your choice. Rock, paper, or scissors.');
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound (computerChoice, humanChoice) {
    if (computerChoice === 'rock') {
        if (humanChoice === 'rock') {
            console.log("It's a tie!");
        } else if (humanChoice === 'paper') {
            console.log('You win! Paper beats rock!');
            humanScore += 1;
        } else {
            console.log('You lose! Rock beats scissors!');
            computerScore += 1;
        }
    } else if (computerChoice === 'paper') {
        if (humanChoice === 'rock') {
            console.log('You lose! Paper beats rock!');
            computerScore += 1;
        } else if (humanChoice === 'paper') {
            console.log("It's a tie!");
        } else {
            console.log('You win! Scissors beats paper!');
            humanScore += 1;
        }
    } else {
        if (humanChoice === 'rock') {
            console.log('You win! Rock beats scissors!');
            humanScore +=1;
        } else if (humanChoice === 'paper') {
            console.log('You lose! Scissors beats paper!');
            computerScore += 1;
        } else {
            console.log("It's a tie!");
        }
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(computerSelection, humanSelection)
