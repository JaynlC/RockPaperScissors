

function computerPlay() {
    let a  = ["rock","paper","scissors"]
        b = a[Math.floor(Math.random()*a.length)];
        return b;
        // console.log(b)
}



function playRound(playerSelection, computerSelection) {
    
    computerSelection = computerPlay();
    // playerSelection.toLowerCase(); //causing game() errors for some reason, needs debugging. 
    if (playerSelection == computerSelection) {
        return "Draw";
        
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win!";
        
    } else if (playerSelection ==="paper" && computerSelection === "rock") {
        return "You Win!";
    
    } else if (playerSelection ==="scissors" && computerSelection ==="paper") {
        return "You Win!"

    } else return "You Lose, but Try Again!"
}

// let playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// let playerTotal = 100;

function game() {
    let playerTotal = 0, compTotal = 0;
    for (let i=1; i<=5; i++) {
        if (playRound() === "You Win!") {
            playerTotal = playerTotal + 1;
        
        } else if (playRound() === "You Lose, but Try Again!") {
            compTotal = compTotal + 1;
        
        } else if (playRound() === "Draw") {
            playerTotal = playerTotal + 0;
            compTotal = compTotal + 0;
        }

    } if (playerTotal > compTotal) {
        return "You Won this game!"
        
    } else if (playerTotal < compTotal) {
        return "You Lost the game, try again!"

    } else if (playerTotal === compTotal) {
        return "Draw, try again!"
    } 

}