// Create a function that will create a user interface for the game

import { getGlobal, setGlobal } from "../globals.js";

export function userInterface() {
const ctx = getGlobal('ctx');
const canvasWidth = getGlobal('canvasWidth');
const canvasHeight = getGlobal('canvasHeight');

ctx.textAlign = 'left';

// Draw the UI
ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
ctx.fillRect(0, 0, canvasWidth, 50);
  
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(430, 0, canvasWidth/3, canvasHeight/3);

  ctx.beginPath();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
  ctx.lineWidth = 5;
  ctx.strokeRect(430, 0, canvasWidth/2, canvasHeight/2);
  
// Import a font 
// let myFont = new FontFace('pixFont', 'url(fonts.googleapis.com/css2?family=Allura&family=Golos+Text&family=Press+Start+2P&display=swap)');
// document.fonts.add(myFont);
  
// Draw the score
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("Score: " + getGlobal('myscore'), 20, 30);

// Draw the timer horizontally beside the score
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("Time: " + getGlobal('timeremaining'), 200, 30);

// Draw the ingameleaderboard on the right hand side
const ingameleaderboard = getGlobal('ingameleaderboard');
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ingameleaderboard.forEach((player, index) => {
    ctx.fillText(player.username + ": " + player.score, canvasWidth - 150, 50 + (index * 30));

});
  
  
  

}