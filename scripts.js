// select elements
const playerRock = document.getElementById("rock")
const playerPaper = document.querySelector('#paper');
const playerScissors = document.querySelector('#scissors');


const playerBox = document.getElementById("pChoice");
const computerBox = document.getElementById("cChoice");
const playerImage = document.createElement('img');
const computerImage = document.createElement('img');

// target and place result
const result = document.getElementById("result");
const resultP = document.createElement('h2');

let playerChoice;



// add event listener and create image for player choice
playerRock.addEventListener('click', function(){
    playerChoice = 'rock'
    playerImage.src = 'static/rock.png'
    playerBox.appendChild(playerImage);
    playGame(playerChoice);
});

playerPaper.addEventListener('click', function(){
    playerChoice = 'paper'
    playerImage.src = 'static/paper.png'
    playerBox.appendChild(playerImage);
    playGame(playerChoice);
});

playerScissors.addEventListener('click', function(){
    playerChoice = 'scissors'
    playerImage.src = 'static/scissors.png'
    playerBox.appendChild(playerImage);
    playGame(playerChoice);
});

const options = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let random = Math.floor(Math.random() * options.length)
    return options[random]
}

function playGame(playerChoice, computerChoice){
    // Gets computer choice and creates image in computer choice box
    computerChoice = getComputerChoice();
    if (computerChoice == 'rock'){
        computerImage.src = 'static/rock.png';
        computerBox.appendChild(computerImage);        
    } else if (computerChoice == 'paper'){
        computerImage.src = 'static/paper.png';
        computerBox.appendChild(computerImage);
    } else if (computerChoice == 'scissors'){
        computerImage.src = 'static/scissors.png';
        computerBox.appendChild(computerImage);
    }

    // Game logic
    if (playerChoice == computerChoice) {
        resultP.innerText = "It's a draw. Sad."
        result.appendChild(resultP);
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        resultP.innerText = "You lose! Paper beats Rock!"
        result.appendChild(resultP)
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerScore++;
        resultP.innerText = "You win! Rock beats scissors."
        result.appendChild(resultP)
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        resultP.innerText = "You lose. Scissors beats paper";
        result.appendChild(resultP)
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        playerScore++;
        resultP.innerText = "Winner winner chicken dinner! Paper beats rock."
        result.appendChild(resultP)
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        resultP.innerText = "Loser. Rock beats scissors"
        result.appendChild(resultP)
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerScore++;
        resultP.innerText = "You won. Nice and slicey!"
        result.appendChild(resultP)
    } else {
        return "You doughnut. You have to choose rock, paper or scissors."
    };
}

/*
function game() {
    while (playerScore < 5 && computerScore < 5) {
        console.log("Your score: " + playerScore);
        console.log("Computer score: " + computerScore);
        const computerChoice = getComputerChoice();
        console.log(playGame(computerChoice));
    }

    if (playerScore == 5) {
        return console.log("YEEEEES! You win!")
    } else {
        return console.log("SUCKKKKA! You lose.")
    }
}
*/