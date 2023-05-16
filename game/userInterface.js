// Create a function that will create a user interface for the game

import { getGlobal, setGlobal } from "../globals.js";

export function userInterface() {
const ctx = getGlobal('ctx');
const canvasWidth = getGlobal('canvasWidth');
// Draw the UI
ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
ctx.fillRect(0, 0, canvasWidth, 50);

// Draw the score
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("Score: " + getGlobal('myscore'), 10, 20);

// Draw the timer horizontally beside the score
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("Time: " + getGlobal('timeremaining'), 200, 20);

// Draw the ingameleaderboard on the right hand side
const ingameleaderboard = getGlobal('ingameleaderboard');
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ingameleaderboard.forEach((player, index) => {
    ctx.fillText(player.username + ": " + player.score, canvasWidth - 200, 20 + (index * 30));
});

}