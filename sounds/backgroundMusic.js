import { getGlobal, setGlobal } from "../globals.js";

export function backgroundMusic(){
  
  console.log("LOADED BACKGROUND AUDIO")
  const audio = new Audio('sounds/Art Of Silence.mp3');
  audio.loop = true;
  audio.play();
  }


// Music has Creative Commons Attribution license (reuse allowed) [https://www.dropbox.com/s/z4him5jwtkv6h6g/Art%20Of%20Silence.mp3?dl=0]