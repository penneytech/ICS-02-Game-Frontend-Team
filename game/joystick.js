import { getGlobal } from "../globals.js";

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

  // Limit the movement of the sprite within the map
  if (playerposition.x <= 10) {
    playerposition.x = 10;
  }
  if (playerposition.y <= 10) {
    playerposition.y = 10;
  }
  if (playerposition.x >= 390) {
    playerposition.x = 390;
  }
  if (playerposition.y >= 390) {
    playerposition.y = 390;
  }
}