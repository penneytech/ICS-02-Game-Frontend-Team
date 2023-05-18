import { getGlobal, setGlobal } from "../globals.js";

export function setTime(){
  let time = getGlobal("timeremaining");
  if(time > 0){
    time--;
    setGlobal("timeremaining", time);
  }
}

export function timer(message){
  message = (message/1000);
  setGlobal("timeremaining", message);
  setInterval(setTime, 1000);
}

