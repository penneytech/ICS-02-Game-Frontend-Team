import { getGlobal } from "../globals.js";
//import { keyPress, draw } from "./Keypress.js";

let framecounter = 0;
let framerate = 10;

export function drawSprite() {

  const canvas = getGlobal('canvas');
  const ctx = getGlobal('ctx');
  const characters = getGlobal('characters');
  const playerposition = getGlobal('playerposition');
  const canvasWidth = getGlobal('canvasWidth');
  const canvasHeight = getGlobal('canvasHeight');

  // Determine which character image to load based on frame count
  const characterIndex = Math.floor(framecounter / framerate);
  const img = getGlobal('characters')['piratemage'][characterIndex];

  ctx.drawImage(
     img,
     canvasWidth / 2 - (playerposition.width / 2), 
     canvasHeight / 2 - (playerposition.height / 2), 
     playerposition.width, 
     playerposition.height,
     );

  // ctx.beginPath();
  // ctx.arc(playerposition.x, playerposition.y, 5, 0, 2 * Math.PI);
  // ctx.fill();
  // ctx.stroke();

  // Increase frame counter
  framecounter++;

  if (framecounter > framerate * 3)
    framecounter = 0;
};
