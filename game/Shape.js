import { getGlobal } from "../globals.js";
//import { keyPress, draw } from "./Keypress.js";

export function move() {

  const canvas = getGlobal('canvas');
  const ctx = getGlobal('ctx');


  /* ctx.beginPath();
   ctx.arc(200, 200, 10, 0, 2 * Math.PI);
   ctx.fillStyle = "#39f7fa";
   ctx.fill(); */

  const img = new Image(); // Create new img element
  img.src = "../game/pirateMage.gif"; // Set source path
  ctx.drawImage(img, 180, 180, 50, 50);
 
};
