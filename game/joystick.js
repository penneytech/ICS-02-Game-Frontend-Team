import { getGlobal } from "../globals.js";
import { isMobile } from './isMobile.js';
import { canMove } from "./canMove.js"

let jd;
let length = getGlobal("mapLength");
let width = getGlobal("mapWidth");

var Joy1 = new JoyStick('joy1Div', {}, function(stickData) {
  jd = stickData.cardinalDirection;
  // console.log(stickData.cardinalDirection);
});

export function getDirection() {
  return jd;
}

export function moveJoystick() {

  let playerposition = getGlobal('playerposition');
  let direction = String(getDirection());

  let speed = getGlobal('speed');
  if (isMobile()){
    if (direction.indexOf("N") != -1 && canMove("up")) {
      playerposition.x -= speed;
    }
    if (direction.indexOf("S") != -1 && canMove("down")) {
      playerposition.x += speed;
    }
    if (direction.indexOf("E") != -1 && canMove("right")) {
      playerposition.y -= speed;
    }
    if (direction.indexOf("W") != -1 && canMove("left")) {
      playerposition.y += speed;
    }
  } else {
    if (direction.indexOf("W") != -1 && canMove("left")) {
      playerposition.x -= speed;
    }
    if (direction.indexOf("E") != -1 && canMove("right")) {
      playerposition.x += speed;
    }
    if (direction.indexOf("N") != -1 && canMove("up")) {
      playerposition.y -= speed;
    }
    if (direction.indexOf("S") != -1 && canMove("down")) {
      playerposition.y += speed;
    }
  }

  // Limit the movement of the sprite within the map
  if (playerposition.x <= 0) {
    playerposition.x = 0;
  }
  if (playerposition.y <= 0) {
    playerposition.y = 0;
  }
  if (playerposition.x >= width) {
    playerposition.x = width;
  }
  if (playerposition.y >= length) {
    playerposition.y = length;
  }
}