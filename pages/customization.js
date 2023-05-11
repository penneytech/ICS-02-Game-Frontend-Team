import menu from './menu.js';
import { getGlobal, setGlobal } from '../globals.js';

export default function customization() {

    let content = document.getElementById('content')
    content.innerHTML = "";

    const characterBar = document.createElement('div');
    characterBar.id = "customizationtitle";
    characterBar.innerHTML = "Choose your Character";

    const characterContainer = document.createElement('div');
    characterContainer.id = "characterbar";
    characterContainer.innerHTML = " ";

    //start of each button used to select which type of player you'd like to be

    const socket = getGlobal('socket');

    let characterButton1 = document.createElement('button');
    characterButton1.id = "characterbar";
    characterButton1.innerHTML = "Rogue";
    characterButton1.value = "SELECT";
    socket.emit("Character chosen", "Rogue")

    const CB1I = document.createElement('img')
    CB1I.style.width = '100px';
    CB1I.src = 'holder.png';
    characterButton1.appendChild(CB1I)

    const characterButton2 = document.createElement('button');
    characterButton2.id = "characterbar";
    characterButton2.innerHTML = "Mage";
    characterButton2.value = "SELECT";
    socket.emit("Character chosen", "Mage")

    const CB2I = document.createElement('img')
    CB2I.style.width = '100px';
    CB2I.src = 'holder.png';
    characterButton2.appendChild(CB2I)

    const characterButton3 = document.createElement('button');
    characterButton3.id = "characterbar";
    characterButton3.innerHTML = "Knight";
    characterButton3.value = "SELECT";
    socket.emit("Character chosen", "Knight")

    const CB3I = document.createElement('img')
    CB3I.src = 'holder.png';
    CB3I.style.width = '100px';
    characterButton3.appendChild(CB3I)

    const characterButton4 = document.createElement('button');
    characterButton4.id = "characterbar";
    characterButton4.innerHTML = "Archer";
    characterButton4.value = "SELECT";
    socket.emit("Character chosen", "Archer")

    const CB4I = document.createElement('img')
    CB4I.src = 'holder.png';
    CB4I.style.width = '100px';
    characterButton4.appendChild(CB4I)

    //end of buttons for character selection
    const elementContainer = document.createElement('div');
    elementContainer.id = "characterbar2";
    elementContainer.innerHTML = " ";

    const elementBar = document.createElement('div');
    elementBar.id = "customizationtitle";
    elementBar.innerHTML = "Choose your Element";


    const elementBContainer = document.createElement('div');
    elementBContainer.id = "characterbar2";
    elementBContainer.innerHTML = " ";


    //start of each button used to select which type of element you'd like to have

    const elementButton1 = document.createElement('button');
    elementButton1.id = "characterbar";
    elementButton1.innerHTML = "Water";
    elementButton1.value = "SELECT";
    socket.emit("Element chosen", "Water")

    const EB1I = document.createElement('img')
    EB1I.src = 'holder.png';
    EB1I.style.width = '100px';
    elementButton1.appendChild(EB1I)

    const elementButton2 = document.createElement('button');
    elementButton2.id = "characterbar";
    elementButton2.innerHTML = "Fire";
    elementButton2.value = "SELECT";
    socket.emit("Element chosen", "Fire")

    const EB2I = document.createElement('img')
    EB2I.src = 'holder.png';
    EB2I.style.width = '100px';
    elementButton2.appendChild(EB2I)

    const elementButton3 = document.createElement('button');
    elementButton3.id = "characterbar";
    elementButton3.innerHTML = "Wind";
    elementButton3.value = "SELECT";
    socket.emit("Element chosen", "Wind")

    const EB3I = document.createElement('img')
    EB3I.src = 'holder.png';
    EB3I.style.width = '100px';
    elementButton3.appendChild(EB3I)

    const elementButton4 = document.createElement('button');
    elementButton4.id = "characterbar";
    elementButton4.innerHTML = "Earth";
    elementButton4.value = "SELECT";
    socket.emit("Element chosen", "Earth")

    const EB4I = document.createElement('img')
    EB4I.src = 'holder.png';
    EB4I.style.width = '100px';
    elementButton4.appendChild(EB4I)

        content.appendChild(characterBar);
    content.appendChild(characterContainer)
        content.appendChild(elementBar);
    content.appendChild(elementContainer)
    characterContainer.appendChild(characterButton1)
    characterContainer.appendChild(characterButton2)
    characterContainer.appendChild(characterButton3)
    characterContainer.appendChild(characterButton4)
    elementContainer.appendChild(elementButton1)
    elementContainer.appendChild(elementButton2)
    elementContainer.appendChild(elementButton3)
    elementContainer.appendChild(elementButton4)

    const backButton = document.createElement('button');
    backButton.innerHTML = "Back";
    backButton.onclick = function() {
        menu();

    }

    content.appendChild(backButton)
}



