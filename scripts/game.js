game();

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let winner = playRound(prompt(), computerPlay());
        if (winner == 1) {
            console.log("Your score:",++playerScore);
        }
        else if (winner == 0) {
            console.log("Computer score:",++computerScore);
        }
    } 

    if (playerScore > computerScore) {
        console.log("You win!!!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose :(");
    }
    else {
        console.log("It's a tie.")
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            alert(lose(computerSelection, playerSelection));
            return 0;
        }
        else if (computerSelection == "scissors") {
            alert(win(playerSelection, computerSelection));
            return 1;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            alert(win(playerSelection, computerSelection));
            return 1;
        }
        else if (computerSelection == "scissors") {
            alert(lose(computerSelection, playerSelection));
            return 0;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            alert(lose(computerSelection, playerSelection));
            return 0;
        }
        else if (computerSelection == "paper") {
            alert(win(playerSelection, computerSelection));
            return 1;
        }
    }

    return -1;
}

function computerPlay() {
    const randomNumber = Math.floor(Math.random()*100+1);
    if (randomNumber < 25) {
        return "rock";
    }
    else if (randomNumber >= 25 && randomNumber < 50) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function win(winner, loser) {
    return `You win! ${winner} beats ${loser}`;
}

function lose(winner, loser) {
    return `You lose! ${winner} beats ${loser}`;
}