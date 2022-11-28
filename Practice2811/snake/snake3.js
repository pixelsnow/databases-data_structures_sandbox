const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.querySelector("#score-count");

const cellSize = 20;
let velocity = [1, 0];
let apple = [0, 0];
let snakeBody = [
  [canvas.clientWidth / cellSize / 2, canvas.clientHeight / cellSize / 2],
  [canvas.clientWidth / cellSize / 2, canvas.clientHeight / cellSize / 2 + 1],
  [canvas.clientWidth / cellSize / 2, canvas.clientHeight / cellSize / 2 + 2],
  [canvas.clientWidth / cellSize / 2, canvas.clientHeight / cellSize / 2 + 3],
];
let gameOn = false;
let score;
let speed;

const clearScreen = () => {
  ctx.fillStyle = "lightpink";
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
};

const drawApple = () => {
  ctx.fillStyle = "black";
  ctx.fillRect(apple[0] * cellSize, apple[1] * cellSize, cellSize, cellSize);
};

const drawSnake = () => {
  ctx.fillStyle = "white";
  snakeBody.forEach((cell) => {
    ctx.fillRect(cell[0] * cellSize, cell[1] * cellSize, cellSize, cellSize);
  });
};

const inCanvas = (vector) => {
  return (
    vector[0] >= 0 &&
    vector[1] >= 0 &&
    vector[0] < canvas.clientWidth / cellSize &&
    vector[1] < canvas.clientHeight / cellSize
  );
};

const snakeBodyIncludes = (vector) => {
  console.log("checking includes");
  console.log(vector, "- vector");
  snakeBody.forEach((cell) => {
    if (cell[0] === vector[0] && cell[1] === vector[1]) {
      console.log(cell[0], vector[0], cell[1], vector[1]);
      return true;
    }
  });
  console.log("false:(");
  return false;
};

const changeSnakePosition = () => {
  const head = snakeBody[0];
  const currHead = snakeBody[snakeBody.length - 1];
  const newHead = [currHead[0] + velocity[0], currHead[1] + velocity[1]];
  if (!inCanvas(newHead) || snakeBodyIncludes(newHead)) {
    console.log("COLLIDE");
    endGame();
  }
  if (newHead[0] === apple[0] && newHead[1] === apple[1]) {
    console.log("got apple!");
    score++;
    speed += 40;
    scoreDisplay.textContent = score;
    setApple();
  } else {
    console.log("no apple :(");
    console.log(snakeBody.shift());
  }
  snakeBody.push(newHead);
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const setApple = () => {
  let newApple;
  do {
    newApple = [
      getRandomIntInclusive(0, canvas.clientWidth / cellSize - 1),
      getRandomIntInclusive(0, canvas.clientHeight / cellSize - 1),
    ];
  } while (snakeBody.includes(newApple) || newApple == apple);
  console.log(newApple, "is new apple");
  apple = newApple;
};

const initGame = () => {
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("press s to start", 30, 50);
  setApple();
  score = 0;
  speed = 400;
};
initGame();

const drawGame = () => {
  if (!gameOn) return;
  clearScreen();
  drawApple();
  changeSnakePosition();
  drawSnake();
  setTimeout(drawGame, speed);
};

const endGame = () => {
  console.log("game ended");
  gameOn = false;
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("game over", 30, 50);
};

const keyDown = (e) => {
  console.log(e.keyCode, "pressed");
  if (e.keyCode == 38) {
    if (velocity[1] === 1) return;
    velocity = [0, -1];
  } else if (e.keyCode == 40) {
    if (velocity[1] === -1) return;
    velocity = [0, 1];
  } else if (e.keyCode == 37) {
    if (velocity[0] === 1) return;
    velocity = [-1, 0];
  } else if (e.keyCode == 39) {
    if (velocity[0] === -1) return;
    velocity = [1, 0];
  } else if (e.keyCode == 81) endGame();
  else if (e.keyCode == 83) {
    gameOn = true;
    drawGame();
  }
  console.log(velocity);
};

document.body.addEventListener("keydown", keyDown);
