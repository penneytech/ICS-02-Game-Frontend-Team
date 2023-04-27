import { getGlobal } from "../globals.js";

let speed = 2;

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// Add event listeners for key presses
document.addEventListener("keydown", function(event) {

  if (event.code === "KeyA") {
    leftPressed = true;
    keyPress();
  } else if (event.code === "KeyD") {
    rightPressed = true;
    keyPress();
  } else if (event.code === "KeyW") {
    upPressed = true;
    keyPress();
  } else if (event.code === "KeyS") {
    downPressed = true;
    keyPress();
  }

});

document.addEventListener("keyup", function(event) {

  if (event.code === "KeyA") {
    leftPressed = false;
    keyPress();
  } else if (event.code === "KeyD") {
    rightPressed = false;
    keyPress();
  } else if (event.code === "KeyW") {
    upPressed = false;
    keyPress();
  } else if (event.code === "KeyS") {
    downPressed = false;
    keyPress();
  }

});

export function keyPress() {

  let playerposition = getGlobal('playerposition');

  if (leftPressed) {
    playerposition.x -= speed;
  }
  if (rightPressed) {
    playerposition.x += speed;
  }
  if (upPressed) {
    playerposition.y -= speed;
  }
  if (downPressed) {
    playerposition.y += speed;
  }

  // Limit the movement of the sprite within the map
  if (playerposition.x <= 15) {
    playerposition.x = 15;
  }
  if (playerposition.y <= 15) {
    playerposition.y = 15;
  }
  if (playerposition.x >= 390) {
    playerposition.x = 390;
  }
  if (playerposition.y >= 390) {
    playerposition.y = 390;
  }
}
