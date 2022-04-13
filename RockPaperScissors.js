

function computerPlay() {
    let a  = ["rock","paper","scissors"]
        b = a[Math.floor(Math.random()*a.length)];
        return b;
        // console.log(b)
}

function playerSelect(userChoice) {
    
    userChoice = window.prompt("Pick your Choice of Rock, Paper or Scissors!").toLowerCase();
    
    while (userChoice != "scissors" && userChoice != "rock" && userChoice != "paper") {
        userChoice = window.prompt(userChoice + " is not a valid choice, please pick Rock, Paper or Scissors").toLowerCase();
    
    } return userChoice
} 

function playRound(playerSelection, computerSelection) {
    // playerSelection = window.prompt("Pick your Choice!")
    // computerSelection = computerPlay();
    
    if (playerSelection == computerSelection) {
        return "Draw, try again!";
        
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win!";
        
    } else if (playerSelection ==="paper" && computerSelection === "rock") {
        return "You Win!";
    
    } else if (playerSelection ==="scissors" && computerSelection ==="paper") {
        return "You Win!"

    } else return "You Lose, but Try Again!"

}

// If we want user to play one game only. 
// const result = playRound(playerSelect(), computerPlay());
// console.log(result);

////////////remove comments to check if playRound() works//////////////////
// let playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


function game() {
    
    let playerTotal = 0, compTotal = 0;
    
    for (let i=1; i<6; i++) {
        
        const oneRound = playRound(playerSelect(), computerPlay());
        
        if (oneRound === "You Win!") {
            playerTotal = playerTotal + 1;
            console.log(oneRound)

        } else if (oneRound === "You Lose, but Try Again!") {
            compTotal = compTotal + 1;
            console.log(oneRound)

        } else if (oneRound === "Draw, try again!") {
            console.log(oneRound)
        }
    } 
    
    if (playerTotal < compTotal) {
        return "You Lost the game, try again!"

    } else if (playerTotal === compTotal) {
        return "You drew against the computer, give the game another go!"

    } else if (playerTotal > compTotal) {
        return "You Won this game!"

    }else {
        return "Error, Please refresh and try again"
    }  
}

//If we want user to play game of 5 immedietely. 
// game();
