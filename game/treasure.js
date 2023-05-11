import { getGlobal } from "../globals.js";

// const treasure = [
//   { "x": 350, "y": 50, "type": "Amber" },
//   { "x": 300, "y": 50, "type": "Ruby" },
//   { "x": 250, "y": 50, "type": "Sapphire" },
//   { "x": 200, "y": 50, "type": "Amber" },
//   { "x": 150, "y": 50, "type": "Ruby" },
//   { "x": 100, "y": 50, "type": "Sapphire" },
//   { "x": 50, "y": 50, "type": "Amber" }
// ];

const playerposition = getGlobal('playerposition')

export function getTreasure() {
  return treasure;
}

export function drawTreasure() {

//  if(wallsfloor[i] == 10){
    const ctx = getGlobal('ctx');
  const treasure = getGlobal('treasure');
  for (let i = 0; i < treasure.length; i++) {
    ctx.beginPath();
    let x = treasure[i].x;
    let y = treasure[i].y;
    x = x - playerposition.x + 200;
    y = y - playerposition.y + 200;
    ctx.arc(x, y, 10, 0, 2 * Math.PI);

    if (String(treasure[i].gem) == "Ruby") {
      ctx.fillStyle = "#f03567";
    } else if (String(treasure[i].gem) == "Sapphire") {
      ctx.fillStyle = "#35c1f0";
    } else if (String(treasure[i].gem) == "Amber") {
      ctx.fillStyle = "#fcd303";
    }
    ctx.fill();
  }
//  }else{
    
//  }
}