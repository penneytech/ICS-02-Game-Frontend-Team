import { getGlobal } from "../globals.js";

const images = [];
images[1] = new Image()
images[1].src = '../tiles/tile3.png';

images[0] = new Image(1)
images[0].src = '../tiles/tile2.png';

const tileSize = 40;
const data = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

export function generateMap() {

  const canvas = getGlobal('canvas');
  const ctx = getGlobal('ctx');
  const mapWidth = 10;
  const mapLength = 10;

  const playerposition = getGlobal('playerposition')
  //console.log(playerposition);

  for (let i = 1; i < data.length; i++) {
    if (data[i] === 1) {

      let x = (i % mapWidth) * tileSize;
      let y = Math.floor(i / mapLength) * tileSize;

      x = x - playerposition.x + 200;
      y = y - playerposition.y + 200;
      ctx.drawImage(images[data[i]],
        x,
        y,
        tileSize,
        tileSize);
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i] === 0) {

      let x = (i % mapWidth) * tileSize;
      let y = Math.floor(i / mapLength) * tileSize;

      x = x - playerposition.x + 200;
      y = y - playerposition.y + 200;
      ctx.drawImage(images[data[i]],
        x,
        y,
        tileSize,
        tileSize);
    }
  }

}


