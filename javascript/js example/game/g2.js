let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

let winnerIndicator = getComputedStyle(document.body).getPropertyValue(
  "--winning-blocks"
);

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);
let count = 0;
const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};
function boxClicked(e) {
  const id = e.target.id;

  if (!spaces[id] && count < 9) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerHasWon() !== false) {
      playerText.innerText = `${currentPlayer} has won!`;
      let winning_Blocks = playerHasWon();
      count = 10;
      winning_Blocks.map(
        (box) => (boxes[box].style.backgroundColor = winnerIndicator)
      );
      return;
    }
    count++;
    currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
  }
  if (count === 9) {
    playerText.innerText = `It's a draw!`;
    boxes.forEach((box.style.color = drawindicator));
  }
}
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function playerHasWon() {
  for (const condition of winningCombos) {
    let [a, b, c] = condition;
    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      return condition;
    }
  }
  return false;
}
restartBtn.addEventListener("click", restart);
function restart() {
  spaces.fill(null);
    count_plays = 0;
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "";
    box.style.color = "#f2c14e";
  });
  playerText.innerText = "Tick-Tac-Toe";
  currentPlayer = X_TEXT;
}
startGame();
