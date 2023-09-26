const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const roll1 = document.getElementById("roll1");
const hold1 = document.getElementById("hold1");
const roll2 = document.getElementById("roll2");
const hold2 = document.getElementById("hold2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const current1 = document.getElementById("current1");
const current2 = document.getElementById("current2");
const newGame = document.getElementById("newGame");
const winner = document.getElementById("winner");

let currentPlayer, currentScore, totalScore1, totalScore2, gamePlaying;
    initializeGame();
     function initializeGame() {
    currentPlayer = 0;
    currentScore = 0;
    totalScore1 = 0;
    totalScore2 = 0;
    gamePlaying = true;
    
    score1.textContent = totalScore1;
    score2.textContent = totalScore2;
    current1.textContent = currentScore;
    current2.textContent = currentScore;
    winner.textContent = "";
    player1.classList.add("active");
    player2.classList.remove("active");
        
    roll1.addEventListener("click", rollDice);
    hold1.addEventListener("click", holdScore);
    roll2.addEventListener("click", rollDice);
    hold2.addEventListener("click", holdScore);
    newGame.addEventListener("click", initializeGame);
}

     function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current${currentPlayer}`).textContent = currentScore;
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    player1.classList.toggle("active");
    player2.classList.toggle("active");
}

    function rollDice() {
    if (gamePlaying) {
        const dice = Math.floor(Math.random() * 6) + 1;
        const diceImg = `dice-${dice}.png`;
        const diceImageElement = document.createElement("img");
        diceImageElement.src = diceImg;
        
        document.getElementById(`current${currentPlayer}`).textContent = dice;
        document.getElementById(`current${currentPlayer}`).appendChild(diceImageElement);
        
        if (dice === 1) {
            switchPlayer();
        } else {
            currentScore += dice;
            document.getElementById(`current${currentPlayer}`).textContent = currentScore;
        }
    }
}

     function holdScore() {
    if (gamePlaying) {
        if (currentPlayer === 1) {
            totalScore1 += currentScore;
            score1.textContent = totalScore1;
        } else {
            totalScore2 += currentScore;
            score2.textContent = totalScore2;
        }

        if (totalScore1 >= 30) {
            winner.textContent = "Player 1 Wins!";
            gamePlaying = false;
        } else if (totalScore2 >= 30) {
            winner.textContent = "Player 2 Wins!";
            gamePlaying = false;
        } else {
            switchPlayer();
        }
    }
}
