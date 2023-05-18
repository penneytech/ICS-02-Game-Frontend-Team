import { getGlobal } from "../globals.js";
import { isMobile } from './isMobile.js';
import { canMove } from "./canMove.js"

let jd;
let length = getGlobal("mapLength");
let width = getGlobal("mapWidth");

var Joy1 = new JoyStick('joy1Div', {}, function (stickData) {
  jd = stickData.cardinalDirection;
});

export function getDirection() {
  return jd;
}

export function moveJoystick() {

  let playerposition = getGlobal('playerposition');
  let direction = String(getDirection());
  let speed = getGlobal('speed');
  let diagonalSpeed = speed / Math.sqrt(2);

  if ((direction.indexOf("W") != -1 && canMove("left")) && (direction.indexOf("N") != -1 && canMove("up"))) {
    playerposition.x -= diagonalSpeed;
    playerposition.y -= diagonalSpeed;
  } else if ((direction.indexOf("W") != -1 && canMove("left")) && (direction.indexOf("S") != -1 && canMove("down"))) {
    playerposition.x -= diagonalSpeed;
    playerposition.y += diagonalSpeed;
  } else if ((direction.indexOf("E") != -1 && canMove("right")) && (direction.indexOf("N") != -1 && canMove("up"))) {
    playerposition.x += diagonalSpeed;
    playerposition.y -= diagonalSpeed;
  } else if ((direction.indexOf("E") != -1 && canMove("right")) && (direction.indexOf("S") != -1 && canMove("down"))) {
    playerposition.x += diagonalSpeed;
    playerposition.y += diagonalSpeed;
  } else if (direction.indexOf("W") != -1 && canMove("left")) {
    playerposition.x -= speed;
  }
  else if (direction.indexOf("E") != -1 && canMove("right")) {
    playerposition.x += speed;
  }
  else if (direction.indexOf("N") != -1 && canMove("up")) {
    playerposition.y -= speed;
  }
  else if (direction.indexOf("S") != -1 && canMove("down")) {
    playerposition.y += speed;
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