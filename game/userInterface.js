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
ctx.fillText("Score: " + getGlobal('points'), 10, 20);

// Draw the timer horizontally beside the score
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("Time: " + getGlobal('timeremaining'), 200, 20);

// Draw the ingameleaderboard on the right hand side
const ingameleaderboard = getGlobal('ingameleaderboard');
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ingameleaderboard.forEach((player, index) => {
    ctx.fillText(player.name + ": " + player.score, canvasWidth - 200, 20 + (index * 30));
});


// // Draw the leaderboard
// ctx.fillStyle = "white";
// ctx.font = "20px Arial";
// ctx.fillText("Leaderboard", 10, 20);

// // Get the leaderboard
// const leaderboard = getGlobal('leaderboard');

// // Draw the leaderboard
// for (let i = 0; i < leaderboard.length; i++) {
//     ctx.fillText(leaderboard[i].name + ": " + leaderboard[i].score, 10, 50 + (i * 30));
// }

}