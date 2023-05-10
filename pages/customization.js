import menu from './menu.js';
import { getGlobal, setGlobal } from '../globals.js';
export default function customization() {




  let content = document.getElementById('content')
  content.innerHTML = "";

  const characterBar = document.createElement('div');
  characterBar.id = "characterbar";
  content.innerHTML = "Choose your Character";

  const characterContainer = document.createElement('div');
  characterContainer.id = "characterbar";
  characterContainer.innerHTML = " ";

  //start of each button used to select which type of player you'd like to be

  const socket = getGlobal('socket');

  const characterButton1 = document.createElement('button');
  characterButton1.id = "characterbar";
  characterButton1.innerHTML = "Rogue";
  characterButton1.value = "SELECT";
  characterButton1.src =
  socket.emit("Character chosen", "Rogue")
  

  const characterButton2 = document.createElement('button');
  characterButton2.id = "characterbar";
  characterButton2.innerHTML = "Mage";
  characterButton2.value = "SELECT";
  socket.emit("Character chosen", "Mage")

  const characterButton3 = document.createElement('button');
  characterButton3.id = "characterbar";
  characterButton3.innerHTML = "Knight";
  characterButton3.value = "SELECT";
  socket.emit("Character chosen", "Knight")

  const characterButton4 = document.createElement('button');
  characterButton4.id = "characterbar";
  characterButton4.innerHTML = "Archer";
  characterButton4.value = "SELECT";
  socket.emit("Character chosen", "Archer")

  //end of buttons for character selection
  const elementContainer = document.createElement('div');
  elementContainer.id = "characterbar2";
  elementContainer.innerHTML = " ";
  
  const elementBar = document.createElement('div');
  elementBar.id = "characterbar2";
  elementContainer.innerHTML = "Choose your Element";

  const elementBContainer = document.createElement('div');
  elementBContainer.id = "characterbar2";
  elementContainer.innerHTML = " ";


  //start of each button used to select which type of element you'd like to have

  const elementButton1 = document.createElement('button');
  elementButton1.id = "characterbar";
  elementButton1.innerHTML = "Water";
  elementButton1.value = "SELECT";
  socket.emit("Element chosen", "Water")

  const elementButton2 = document.createElement('button');
  elementButton2.id = "characterbar";
  elementButton2.innerHTML = "Fire";
  elementButton2.value = "SELECT";
  socket.emit("Element chosen", "Fire")

  const elementButton3 = document.createElement('button');
  elementButton3.id = "characterbar";
  elementButton3.innerHTML = "Wind";
  elementButton3.value = "SELECT";
  socket.emit("Element chosen", "Wind")

  const elementButton4 = document.createElement('button');
  elementButton4.id = "characterbar";
  elementButton4.innerHTML = "Earth";
  elementButton4.value = "SELECT";
  socket.emit("Element chosen", "Earth")




  content.appendChild(characterContainer)
  content.appendChild(elementContainer)
  characterContainer.appendChild(characterButton1)
  characterContainer.appendChild(characterButton2)
  characterContainer.appendChild(characterButton3)
  characterContainer.appendChild(characterButton4)
  elementContainer.appendChild(elementBContainer)
  elementBContainer.appendChild(elementButton1)
  elementBContainer.appendChild(elementButton2)
  elementBContainer.appendChild(elementButton3)
  elementBContainer.appendChild(elementButton4)

  

  const backButton = document.createElement('button');
  backButton.innerHTML = "Back";
  backButton.onclick = function() {
    menu();

  }
}



