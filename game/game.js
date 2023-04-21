/*
The game.js file sets up the canvas context and contains the main loop that will drive the whole program. 
*/

// Imports
import { getGlobal } from "../globals.js";
import { move } from "./Shape.js";
import { generateMap } from './generateMap.js';
import { keyPress } from './keyPress.js';

// Global page variables 
let ctx;
let canvas;
let count = 0;

/********************
Initialize the canvas and start the game loop
********************/

export default function startGame() {
  // Get canvas and context
  ctx = getGlobal('ctx');
  canvas = getGlobal('canvas');

  // Start the game loop
  gameLoop();
}

/********************
The main gameLoop example: 
- Clear the canvas
- Draw the count on the canvas
- Increment the count
- Repeat the process using requestAnimationFrame()
********************/

function gameLoop() {
  // Clear the canvas (This always stays at the top)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Generate the map
  generateMap();

  // Call keyPress
  keyPress();

  // Loop this function (this always stays at the bottom)
  requestAnimationFrame(gameLoop);

  move();

}
