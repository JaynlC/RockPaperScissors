// global scope parameters for score keeping
let playerTotal = 0, compTotal = 0;


function computerPlay() {
    let a  = ["rock","paper","scissors"]
        b = a[Math.floor(Math.random()*a.length)];
        return b;
        //update DOM to show computerSelection
}

function playerSelect(userChoice) {
    
    userChoice = window.prompt("Pick your Choice of Rock, Paper or Scissors!").toLowerCase();
    
    while (userChoice != "scissors" && userChoice != "rock" && userChoice != "paper") {
        userChoice = window.prompt(userChoice + " is not a valid choice, please pick Rock, Paper or Scissors").toLowerCase();
    
    } return userChoice
} 

function playRound(playerSelection, computerSelection) {
    
    // removes the previous results written by playround(), if played before. 
    const selectResults = document.querySelector(".resultsTab");
    while (selectResults.firstChild) {
        selectResults.removeChild(selectResults.firstChild);
    }

    let winResult = document.createElement("p");
    let drawResult = document.createElement("p");
    let loseResult = document.createElement("p");

    let playerScore = document.querySelector(".playerScore");
    let computerScore = document.querySelector(".computerScore");
    
    if (playerSelection == computerSelection) {
        console.log("draw")
        drawResult.textContent = `Draw, Try Again!`;
        drawResult.classList.add("draw")
        selectResults.appendChild(drawResult);
        

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("win")
        playerTotal=playerTotal +1;
        playerScore.textContent = `Score = ${playerTotal}`;
        winResult.textContent = `You Win!`;
        winResult.classList.add("win")
        selectResults.appendChild(winResult);

        

    } else if (playerSelection ==="paper" && computerSelection === "rock") {
        console.log("win")
        playerTotal=playerTotal +1;
        playerScore.textContent = `Score = ${playerTotal}`;
        winResult.textContent = `You Win!`;
        winResult.classList.add("win")
        selectResults.appendChild(winResult);
        

    } else if (playerSelection ==="scissors" && computerSelection ==="paper") {
        console.log("win")
        playerTotal=playerTotal +1;
        playerScore.textContent = `Score = ${playerTotal}`;
        winResult.textContent = `You Win!`;
        winResult.classList.add("win")
        selectResults.appendChild(winResult);
        

    } else {
        console.log("Lose")
        compTotal = compTotal+1;
        computerScore.textContent = `Score = ${compTotal}`;
        loseResult.textContent = `You Lose, but Try Again!`;
        loseResult.classList.add("lose")
        selectResults.appendChild(loseResult);
        
    }
}

function countScores() {
    
    // setting up results screen DOM
    const results = document.querySelector(".playerChoice");
    let finalResult = document.createElement("div");
    
    
    if (playerTotal>4 || compTotal >4) {
        if (playerTotal < compTotal) {
            console.log("You Lost!");
            finalResult.classList.add("finalResultLoss");
            finalResult.textContent = `You Lost, but Try your luck again!`;
            results.appendChild(finalResult);
            stopgame();
            
    
        } else if (playerTotal > compTotal) {
            console.log("You Won!");
            finalResult.classList.add("finalResultWin");
            finalResult.textContent = `Congratulations, You Won! Will you be Lucky next time?!`;
            results.appendChild(finalResult);
            stopgame();
        }
           
    }
}

function stopgame() {
    // removes previous result description on DOM
    const selectResults = document.querySelector(".resultsTab");
    while (selectResults.firstChild) {
        selectResults.removeChild(selectResults.firstChild);
    }
    // remove all images to display the results screen.
    const results = document.querySelector(".playerChoice");
    const hideImages = document.querySelectorAll(".options");
    hideImages.forEach(hide => {
        results.removeChild(hide);
    })
    restartGame();
}

function restartGame() {
    // Add reset function
    const results = document.querySelector(".playerChoice");
    const resetButton = document.createElement("div");
    
    resetButton.classList.add("resetButton")
    resetButton.innerText = "Click Me to Play a New Round!"
    results.appendChild(resetButton);
    results.classList.toggle("playerChoice");
    results.classList.toggle("resultsPage")
    resetButton.addEventListener("click", () => {
        location.reload();
    })

    //highlight the winning score
    const playerScoreArea = document.querySelector(".playerScore");
    const computerScoreArea = document.querySelector(".computerScore");
    if (playerTotal > compTotal) {
        playerScoreArea.classList.toggle("playerScoreArea");
    } else if (compTotal > playerTotal) {
        computerScoreArea.classList.toggle("computerScoreArea");
    }
}

function hoverScoresArea() {
    const playerScoreArea = document.querySelector(".playerScore");
    const computerScoreArea = document.querySelector(".computerScore");
    const imagehover = document.querySelectorAll("img");
    
    playerScoreArea.addEventListener("mouseenter", () => {
        playerScoreArea.classList.toggle("playerScoreArea");
    })
    playerScoreArea.addEventListener("mouseleave", () => {
        playerScoreArea.classList.toggle("playerScoreArea");
    })
    
    computerScoreArea.addEventListener("mouseenter", () => {
        computerScoreArea.classList.toggle("computerScoreArea");
    })
    computerScoreArea.addEventListener("mouseleave", () => {
        computerScoreArea.classList.toggle("computerScoreArea");
    })

    imagehover.forEach(image => {
        image.addEventListener("mouseenter", () =>{
            image.classList.toggle("highlight");
        })
    });
    imagehover.forEach(image => {
        image.addEventListener("mouseleave", () =>{
            image.classList.toggle("highlight");
        })
    });
}

function startGame() {
    const optionSelection = document.querySelectorAll("img");
    optionSelection.forEach(option => {
        option.addEventListener("click", () => {
            const oneRound = playRound(option.id, computerPlay());
            // option.classList.toggle("highlight");
            countScores();
        })
    })
}

hoverScoresArea()
startGame();