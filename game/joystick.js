import { getGlobal } from "../globals.js";
import { isMobile } from './isMobile.js';

let jd;

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

  let speed = 2;
  if (isMobile()){
    if (direction.indexOf("N") != -1) {
      playerposition.x -= speed;
    }
    if (direction.indexOf("S") != -1) {
      playerposition.x += speed;
    }
    if (direction.indexOf("E") != -1) {
      playerposition.y -= speed;
    }
    if (direction.indexOf("W") != -1) {
      playerposition.y += speed;
    }
  } else {
    if (direction.indexOf("W") != -1) {
      playerposition.x -= speed;
    }
    if (direction.indexOf("E") != -1) {
      playerposition.x += speed;
    }
    if (direction.indexOf("N") != -1) {
      playerposition.y -= speed;
    }
    if (direction.indexOf("S") != -1) {
      playerposition.y += speed;
    }
  }

  // Limit the movement of the sprite within the map
  if (playerposition.x <= 10) {
    playerposition.x = 10;
  }
  if (playerposition.y <= 10) {
    playerposition.y = 10;
  }
  if (playerposition.x >= 380) {
    playerposition.x = 380;
  }
  if (playerposition.y >= 370) {
    playerposition.y = 370;
  }
}