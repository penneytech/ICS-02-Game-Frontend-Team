// Create a function that renders the opponents
// Path: opponents\renderOpponents.js

import { getGlobal, setGlobal } from "../globals.js";

let opponentFramecounters = {};

export function drawOpponents() {

  const ctx = getGlobal('ctx');
  const userMap = getGlobal('userMap');
  const canvasWidth = getGlobal('canvasWidth');
  const canvasHeight = getGlobal('canvasHeight');
  const playerposition = getGlobal('playerposition');
  const characters = getGlobal('characters'); // Assuming you have the opponent images stored in the opponentImages variable

  let framerate = 10;

  userMap.forEach((opponent, opponentId) => {

    console.log("drawOpponents", opponent)

    ctx.beginPath();
    let x = opponent.x;
    let y = opponent.y;
    x = x - playerposition.x + canvasWidth / 2;
    y = y - playerposition.y + canvasHeight / 2;
    let opponentImage = characters[opponent.character];

    // Initialize frame counter for opponent if not already present
    if (!opponentFramecounters[opponentId]) {
      opponentFramecounters[opponentId] = 0;
    }

    // Determine which opponent image to load based on frame count
    const opponentImageIndex = Math.floor(opponentFramecounters[opponentId] / framerate);
    if (opponentImage[opponentImageIndex]) {
      ctx.drawImage(opponentImage[opponentImageIndex], x, y, 50, 50);
    }

    // Increase frame counter
    opponentFramecounters[opponentId]++;

    if (opponentFramecounters[opponentId] > framerate * 3)
      opponentFramecounters[opponentId] = 0;
  });
}
