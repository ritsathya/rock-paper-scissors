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

computerPlay();