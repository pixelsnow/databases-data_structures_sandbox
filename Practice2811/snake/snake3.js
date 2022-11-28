const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.querySelector("#score-count");
const speedDisplay = document.querySelector("#speed");

const cellSize = 20;
let gameOn;
let score;
let speed;
let direction;
let apple;
let snakeBody;

/* GAME CONTROLS */

const initGame = () => {
  // Write the start game message
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("press s to start", 30, 50);
  // Pick a location for the apple

  gameOn = false; // Game off until user presses s
  score = 0;
  speed = 400;
  direction = { x: 0, y: -1 }; // When the game starts the snake goes up
  snakeBody = [
    {
      x: canvas.clientWidth / cellSize / 2,
      y: canvas.clientHeight / cellSize / 2 + 3,
    },
    {
      x: canvas.clientWidth / cellSize / 2,
      y: canvas.clientHeight / cellSize / 2 + 2,
    },
    {
      x: canvas.clientWidth / cellSize / 2,
      y: canvas.clientHeight / cellSize / 2 + 1,
    },
    {
      x: canvas.clientWidth / cellSize / 2,
      y: canvas.clientHeight / cellSize / 2,
    },
  ];
  apple = getNewApple();
};

const drawGame = () => {
  if (!gameOn) return; // If game is over, stop looping
  clearScreen();
  changeSnakePosition();
  drawSnake();
  drawApple();
  setTimeout(drawGame, speed); // Recursively calling this function
};

const endGame = () => {
  gameOn = false;
  // Render message
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("game over", 30, 50);
  ctx.fillText("refresh to start a new game", 30, 80);
};

const keyDown = (e) => {
  console.log(e.keyCode, "pressed");
  if (e.keyCode == 38) {
    // If the snake was already moving in the same direction or the opposite direction, do nothing
    if (direction.y) return;
    direction = { x: 0, y: -1 };
  } else if (e.keyCode == 40) {
    if (direction.y) return;
    direction = { x: 0, y: 1 };
  } else if (e.keyCode == 37) {
    if (direction.x) return;
    direction = { x: -1, y: 0 };
  } else if (e.keyCode == 39) {
    if (direction.x) return;
    direction = { x: 1, y: 0 };
  } else if (e.keyCode == 81) {
    endGame();
  } else if (e.keyCode == 83) {
    gameOn = true;
    drawGame();
  } /* else if (e.keyCode == 78) {
  } */
};

/* RENDERING FUNCTIONS */

const clearScreen = () => {
  ctx.fillStyle = "lightpink";
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
};

const drawApple = () => {
  ctx.fillStyle = "black";
  ctx.fillRect(apple.x * cellSize, apple.y * cellSize, cellSize, cellSize);
};

const drawSnake = () => {
  ctx.fillStyle = "white";
  snakeBody.forEach((cell) => {
    ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
  });
};

/* GAME LOGIC */

// If "point" is inside the boundaries of canvas, returns true
// If point is outside the canvas, returns false.
const inCanvas = (point) => {
  console.log(point);
  console.log(canvas.clientWidth / cellSize);
  return (
    point.x >= 0 &&
    point.y >= 0 &&
    point.x < canvas.clientWidth / cellSize &&
    point.y < canvas.clientHeight / cellSize
  );
};

// If "point" is one of the cells of the snake, returns true
// If point is not in snake, returns false.
const inSnakeBody = (point) => {
  let collisionDetected = false;
  snakeBody.forEach((cell) => {
    if (cell.x === point.x && cell.y === point.y) {
      console.log("SELF-COLLISION DETECTED");
      console.log(cell.x, point.x, cell.y, point.y);
      collisionDetected = true;
    }
  });
  return collisionDetected;
};

const changeSnakePosition = () => {
  const head = snakeBody[0];
  const currHead = snakeBody[snakeBody.length - 1];
  const newHead = { x: currHead.x + direction.x, y: currHead.y + direction.y };
  if (!inCanvas(newHead) || inSnakeBody(newHead)) {
    console.log("ENDING GAME");
    endGame();
  }
  if (newHead.x === apple.x && newHead.y === apple.y) {
    console.log("got apple!");
    score++;
    speed *= 0.95;
    console.log("new speed is", speed);
    scoreDisplay.textContent = score;
    speedDisplay.textContent = Math.round(speed);
    apple = getNewApple();
  } else {
    console.log("no apple :(");
    console.log(snakeBody.shift());
  }
  snakeBody.push(newHead);
};

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getNewApple = () => {
  let newApple;
  do {
    newApple = {
      x: getRandomIntInclusive(0, canvas.clientWidth / cellSize - 1),
      y: getRandomIntInclusive(0, canvas.clientHeight / cellSize - 1),
    };
  } while (inSnakeBody(newApple)); // If the new apple overlaps with snake, keep picking a new apple
  console.log(newApple, "is new apple");
  return newApple;
};

/* ACTION */

// Initialise game
initGame();
// Wait for user unput
document.body.addEventListener("keydown", keyDown);
