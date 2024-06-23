let computerChoice;

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

