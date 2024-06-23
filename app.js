let computerChoice;
let humanChoice;

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

