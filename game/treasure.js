import { getGlobal } from "../globals.js";

const treasure = [
  {"x": 10, "y": 20, "type": "Ruby"},
  {"x": 30, "y": 20, "type": "Sapphire"},
  {"x": 50, "y": 20, "type": "Ruby"},
  {"x": 70, "y": 20, "type": "Sapphire"},
  {"x": 90, "y": 20, "type": "Ruby"}
];

const playerposition = getGlobal('playerposition')

export function drawTreasure(){
  const ctx = getGlobal('ctx');
  for (let i = 0; i < treasure.length; i++){
    ctx.beginPath();
    let x = treasure[i].x;
    let y = treasure[i].y;
    x = x - playerposition.x + 200;
    y = y - playerposition.y + 200;
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    //if (String(treasure[i]).equals("Ruby")){
    if (treasure[i] == "Ruby"){
      ctx.fillStyle = "#f03567";
    //} else if (treasure[i].type.equals("Sapphire")){
    } else if (treasure[i] == "Sapphire"){
      ctx.fillStyle = "#35c1f0";
    }
    ctx.fill();
  }
}