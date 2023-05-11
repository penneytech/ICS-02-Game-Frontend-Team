import { getGlobal } from "../globals.js";
//import { keyPress, draw } from "./Keypress.js";

let framecounter = 0;
let framerate = 10;

export function drawSprite() {

  const canvas = getGlobal('canvas');
  const ctx = getGlobal('ctx');
  const characters = getGlobal('characters');

  // Determine which character image to load based on frame count
  const characterIndex = Math.floor(framecounter / framerate);
  const img = getGlobal('characters')['piratemage'][characterIndex];

  ctx.drawImage(img, 180, 180, 50, 50);

  // Increase frame counter
  framecounter++;

  if (framecounter > framerate * 3)
    framecounter = 0;
};
