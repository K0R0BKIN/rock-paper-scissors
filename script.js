// "Global" functions

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Variables

const playOptions = ["rock", "paper", "scissors"];
const [player1, player2] = ["human", "computer"];
let [score1, score2] = [0, 0];
const maxRounds = 5;

// "Local" helper functions

function getRandomPlay() {
    return getRandomElement(playOptions);
}

function getCounterplay(play = getRandomPlay()) {
    return playOptions.filter((e) => e != play)[0];
}

function getWinner(play1, play2) {
    if (getCounterplay(play1) == play2) {
        return player2;
    } else if (play1 == play2) {
        return null;
    } else {
        return player1;
    }
}

function printCurrentScore() {
    return `${score1} — ${score2}`;
}

function updateScoreboard(msg) {
    const para = document.createElement("p");
    para.textContent = msg;

    scoreboard.appendChild(para);
}

function isLastRound() {
    return [score1, score2].some((s) => s == maxRounds);
}

// Event handlers

function handlePlay(e) {
    playRound(e.target.value);
}

// Rendering the picker and the scoreboard

const playPicker = document.querySelector("#play-options");
const scoreboard = document.querySelector("#scoreboard");


for (const play of playOptions) {
    const btn = document.createElement("button");
    btn.value = play;
    btn.textContent = capitalize(play);
    btn.addEventListener("click", handlePlay);

    playPicker.appendChild(btn);
}

// Game logic

function playRound(play1, play2 = getRandomPlay()) {
    let winner = getWinner(play1, play2);
    let message;
    
    if (winner == player2) {
        score2++;
        message =
        `You lose! ${capitalize(play2)} beats ${play1}.`;
    } else if (winner === null) {
        message = `Draw! Both played ${play1}.`;
    } else {
        score1++;
        message =
        `You win! ${capitalize(play1)} beats ${play2}.`;
    }
    message += ` Current score: ${printCurrentScore()}`;
    updateScoreboard(message);
    
    if (isLastRound()) {
        const btns = document.querySelectorAll("button");
        btns.forEach((btn) => {
            btn.removeEventListener("click", handlePlay);
        });
        
        message =
        `Final score: ${printCurrentScore()}. ${capitalize(winner)} wins!`;
        updateScoreboard(message);
    }
}