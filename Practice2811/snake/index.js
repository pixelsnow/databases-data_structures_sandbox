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
  // Set game parameters
  gameOn = false; // Game off until user presses s
  score = 0;
  speed = 400;
  direction = { x: 0, y: -1 }; // When the game starts the snake goes up
  snakeBody = [
    // the snake is roughly in the middle of the canvas and head is up
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
  apple = getNewApple(); // Pick location for the apple
};

// Main game function that loops until the game is over
const drawGame = () => {
  // If game is over, stop looping
  if (!gameOn) return;
  // Clear canvas
  clearScreen();
  // Move snake
  changeSnakePosition();
  // Render snake and apple
  drawSnake();
  drawApple();
  // Recursive loop
  setTimeout(drawGame, speed);
};

const endGame = () => {
  gameOn = false;
  // Show game over message
  ctx.fillRect(0, 0, 50, 50);
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("game over", 30, 50);
  ctx.fillText("refresh to start a new game", 30, 80);
  console.log("game over");
};

const keyDown = (e) => {
  console.log(e.keyCode, "pressed");
  if (e.keyCode == 38) {
    // If the snake was already moving in the same direction or the opposite direction, do nothing
    if (direction.y) return;
    // Otherwise change direction
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
  }
};

/* RENDERING FUNCTIONS */

// Covers the entire canvas with background colour
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
      collisionDetected = true;
    }
  });
  return collisionDetected;
};

//
const changeSnakePosition = () => {
  // Set new head coordinates
  const head = snakeBody[0];
  const currHead = snakeBody[snakeBody.length - 1];
  const newHead = { x: currHead.x + direction.x, y: currHead.y + direction.y };
  // Check if snake hit a wall or itself
  if (!inCanvas(newHead) || inSnakeBody(newHead)) {
    // If so, end game
    endGame();
  }
  // If snake ate the apple
  if (newHead.x === apple.x && newHead.y === apple.y) {
    // Increase score and speed
    score++;
    speed *= 0.95;
    // Display score and speed
    scoreDisplay.textContent = score;
    speedDisplay.textContent = Math.round(speed);
    // Set new apple
    apple = getNewApple();
  } else {
    // If snake didn't eat the apple, shift the tail
    // (otherwise snake would grow, so we wouldn't shift)
    snakeBody.shift();
  }
  // Move the snake
  snakeBody.push(newHead);
};

// Returns a random integer between min and max (included)
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Returns object of new coordinates of an apple
const getNewApple = () => {
  let newApple;
  do {
    // get new random coordinates
    newApple = {
      x: getRandomIntInclusive(0, canvas.clientWidth / cellSize - 1),
      y: getRandomIntInclusive(0, canvas.clientHeight / cellSize - 1),
    };
  } while (inSnakeBody(newApple)); // If the new apple overlaps with snake, keep picking a new apple
  return newApple;
};

/* ACTION */

// Initialise game
initGame();
// Wait for user unput
document.body.addEventListener("keydown", keyDown);
