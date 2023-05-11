/*
The game.js file sets up the canvas context and contains the main loop that will drive the whole program. 
*/

// Imports
import { getGlobal } from "../globals.js";
import { drawSprite } from "./drawSprite.js";
import { generateMap } from './generateMap.js';
import { keyPress } from './keyPress.js';
import { moveJoystick } from "./joystick.js";
import { drawTreasure } from "./treasure.js";
import { collectTreasure } from "./collect.js";

// Global page variables 
let ctx;
let canvas;

// Import maps 
import backgroundmap from '../map/background.js';
import details from '../map/details.js';
import wallsfloor from '../map/wallsfloor.js';

export default function startGame() {
  // Get canvas and context
  ctx = getGlobal('ctx');
  canvas = getGlobal('canvas');

  // Start the game loop
  gameLoop();
}


function gameLoop() {
  // Clear the canvas (This always stays at the top)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Generate the map
  generateMap(backgroundmap);
  generateMap(details);
  generateMap(wallsfloor);

  //Draw the treasure
  drawTreasure();

  // Call keyPress
  keyPress();

  // Call joystick
  moveJoystick();

  // Draw the player sprite
  drawSprite();

  collectTreasure();

  // Loop this function (this always stays at the bottom)
  setTimeout(gameLoop, 16.67);
  //requestAnimationFrame(gameLoop);
}
