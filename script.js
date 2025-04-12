function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 1 / 3) {
        return ("rock");
    } else if (randomNum < 2 / 3) {
        return ("paper");
    } else {
        return ("scissors");
    }
}

function getHumanChoice() {
    return prompt("What's your move?", "rock");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
        humanChoice = humanChoice.toLowerCase();
        let winner;

        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                winner = "computer";
            } else if (computerChoice === "scissors") {
                winner = "human";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                winner = "human";
            } else if (computerChoice === "scissors") {
                winner = "computer";
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                winner = "computer";
            } else if (computerChoice === "paper") {
                winner = "human";
            }
        }

        if (winner === "human") {
            humanScore += 1;
            console.log(`You win! ${capitalize(humanChoice)} beats ${computerChoice}.`);
        } else if (winner === "computer") {
            computerScore += 1;
            console.log(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`);
        } else {
            console.log(`Draw! Both played ${humanChoice}.`);
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    const winner = humanScore > computerScore ? "human" : "computer";

    console.log(
        `Final score: ${humanScore} - ${computerScore}. ${capitalize(winner)} wins!`
    )
}

playGame();