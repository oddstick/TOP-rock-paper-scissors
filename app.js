// Redoing my RPS app once again... 
// Was so stuck for so long that I finally needed to get help
// This video helped most: https://www.youtube.com/watch?v=jaVNP3nIAv0
// So, yes, my own RPS is very similar, but bits I had of my previous attempts
// weren't all that far off--I mostly just didn't have things in the right order

//Cache variables at top
let playerScore = 0;
let computerScore = 0;
const roundUpdate_h2 = document.getElementById("player-vs-comp");
const playerChoice_p = document.getElementById("player-choice");
const computerChoice_p = document.getElementById("computer-choice");
const playerScore_p = document.getElementById("player-score");
const computerScore_p = document.getElementById("computer-score");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNum = (Math.floor(Math.random() * 3));
    return choices[randomNum];
}

function playerWinsRound(playerChoice, computerChoice) {
    playerScore++;
    playerScore_p.innerHTML = "Player Score: " + playerScore;
    roundUpdate_h2.innerHTML = playerChoice + " beats " + computerChoice + ". You win!";
    if (playerScore == 5) {
        declareWin();
    }
}

function computerWinsRound(playerChoice, computerChoice) {
    computerScore++;
    computerScore_p.innerHTML = "Computer Score: " + computerScore;
    roundUpdate_h2.innerHTML = computerChoice + " beats " + playerChoice + ". You lose...";
    if (computerScore == 5) {
        declareLoss();
    }
}

function nobodyWinsRound() {
    roundUpdate_h2.innerHTML = "Womp, womp... It's a draw. Choose again!";
}

function declareWin() {
    roundUpdate_h2.innerHTML = "Congratulations, you've won the game!";
}

function declareLoss() {
    roundUpdate_h2.innerHTML = "Ope, looks like you lost this game. Why don't you try again?";
}


function playRound(playerChoice) {

    const computerChoice = computerPlay();
    //win scenarios
    switch (playerChoice + " " + computerChoice) {
        case "Rock Scissors":
        case "Paper Rock":
        case "Scissors Paper":
            playerWinsRound(playerChoice, computerChoice);
            break;
        //lose scenarios
        case "Rock Paper":
        case "Paper Scissors":
        case "Scissors Rock":
            computerWinsRound(playerChoice, computerChoice);
            break;
        //draw scenarios
        case "Rock Rock":
        case "Paper Paper":
        case "Scissors Scissors":
            nobodyWinsRound(playerChoice, computerChoice);
            break;

    }
}

// user button input initiates the playRound
function game() {

        rockBtn.addEventListener("click", function () {
            playRound("Rock");
        })
    
        paperBtn.addEventListener("click", function () {
            playRound("Paper");
        })
    
        scissorsBtn.addEventListener("click", function () {
            playRound("Scissors");
        })

}

// initiates an RPS game
game();