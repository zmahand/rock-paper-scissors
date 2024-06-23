let computerChoice;
let humanChoice;
let computerSelection;
let humanSelection;
let computerScore = 0;
let humanScore = 0;

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const results = document.querySelector(".results");
const playerScoreBox = document.querySelector(".player-score");
const compScoreBox = document.querySelector(".computer-score");

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

// function getHumanChoice () {
//    humanChoice = prompt('Enter your choice. Rock, paper, or scissors.');
//    humanChoice = humanChoice.toLowerCase();
//    return humanChoice;
// }



function playGame() {
    function playRound() {
        computerSelection = getComputerChoice()
        if (computerChoice === 'rock') {
            if (humanChoice === 'rock') {
                results.textContent = "It's a tie!";
            } else if (humanChoice === 'paper') {
                results.textContent = 'You win! Paper beats rock!';
                humanScore += 1;
            } else {
                results.textContent = 'You lose! Rock beats scissors!';
                computerScore += 1;
            }
        } else if (computerChoice === 'paper') {
            if (humanChoice === 'rock') {
                results.textContent = 'You lose! Paper beats rock!';
                computerScore += 1;
            } else if (humanChoice === 'paper') {
                results.textContent = "It's a tie!";
            } else {
                results.textContent = 'You win! Scissors beats paper!';
                humanScore += 1;
            }
        } else {
            if (humanChoice === 'rock') {
                results.textContent = 'You win! Rock beats scissors!';
                humanScore +=1;
            } else if (humanChoice === 'paper') {
                results.textContent = 'You lose! Scissors beats paper!';
                computerScore += 1;
            } else {
                results.textContent = "It's a tie!";
            }
        }

        playerScoreBox.textContent = "Your score: " + humanScore;
        compScoreBox.textContent = "Computer's score: " + computerScore;

        if (computerScore === 5) {
            results.textContent = 'The computer wins the game!';
        } else if (humanScore === 5) {
            results.textContent = 'You win the game!';
        }
    }

    btnRock.addEventListener("click", function () {
        humanChoice = 'rock';
        playRound();
    });
    btnPaper.addEventListener("click", function () {
        humanChoice = 'paper';
        playRound();
    });
    btnScissors.addEventListener("click", function () {
        humanChoice = 'scissors';
        playRound();
    });

    
    // removed logic that tells the game to play 5 rounds
    // for (let i = 0; i < 5; i++) {
    //     humanSelection = getHumanChoice()
    //     computerSelection = getComputerChoice()

    //     playRound(computerSelection, humanSelection);
    // }

    //console.log('Human scored ' + humanScore + ". Computer scored " + computerScore);
}

playGame();







