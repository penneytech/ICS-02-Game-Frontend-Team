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
    characterButton1.className = "characterbutton";
    characterButton1.innerHTML = "Rogue";
    characterButton1.value = "SELECT";
    characterButton1.onclick = function () {
        socket.emit("characterselect", "Rogue")
        console.log("The Rogue aspect has been selected!");
    };

    const CB1I = document.createElement('img')
    CB1I.style.width = '100px';
    CB1I.src = './images/rogue.png';
    characterButton1.appendChild(CB1I)

    const characterButton2 = document.createElement('button');
    characterButton2.className = "characterbutton";
    characterButton2.innerHTML = "Mage";
    characterButton2.value = "SELECT";
    socket.emit("Character chosen", "Mage")
    characterButton2.onclick = function () {
        socket.emit("characterselect", "Mage")
        console.log("The Mage aspect has been selected!");
    };

    const CB2I = document.createElement('img')
    CB2I.style.width = '100px';
    CB2I.src = './images/mage.png';
    characterButton2.appendChild(CB2I)

    const characterButton3 = document.createElement('button');
    characterButton3.className = "characterbutton";
    characterButton3.innerHTML = "Knight";
    characterButton3.value = "SELECT";
    characterButton3.onclick = function () {
        socket.emit("characterselect", "Knight")
        console.log("The Knight aspect has been selected!");
    };

    const CB3I = document.createElement('img')
    CB3I.src = './images/knight.png';
    CB3I.style.width = '100px';
    characterButton3.appendChild(CB3I)

    const characterButton4 = document.createElement('button');
    characterButton4.className = "characterbutton";
    characterButton4.innerHTML = "Archer";
    characterButton4.value = "SELECT";
    characterButton4.onclick = function () {
        socket.emit("characterselect", "Archer")
        // Do something when the button is clicked
        console.log("The Archer aspect has been selected!");
    };

    const CB4I = document.createElement('img')
    CB4I.src = './images/archer.png';
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
    elementButton1.className = "characterbutton";
    elementButton1.innerHTML = "Water";
    elementButton1.value = "SELECT";
    socket.emit("Element chosen", "Water")
    elementButton1.onclick = function () {
        socket.emit("elementselect", "Water")
        console.log("The Water aspect has been selected!");
    };

    const EB1I = document.createElement('img')
    EB1I.src = './images/water.png';
    EB1I.style.width = '100px';
    elementButton1.appendChild(EB1I)

    const elementButton2 = document.createElement('button');
    elementButton2.className = "characterbutton";
    elementButton2.innerHTML = "Fire";
    elementButton2.value = "SELECT";
    socket.emit("elementselect", "Fire")
    elementButton2.onclick = function () {
        socket.emit("Element chosen", "Fire")
        console.log("The Fire aspect has been selected!");
    };

    const EB2I = document.createElement('img')
    EB2I.src = './images/fire.png';
    EB2I.style.width = '100px';
    elementButton2.appendChild(EB2I)


    const elementButton4 = document.createElement('button');
    elementButton4.className = "characterbutton";
    elementButton4.innerHTML = "Earth";
    elementButton4.value = "SELECT";
    elementButton4.onclick = function () {
        socket.emit("elementselect", "Earth")
        console.log("The Earth aspect has been selected!");
    };

    const EB4I = document.createElement('img')
    EB4I.src = './images/earth.png';
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
    elementContainer.appendChild(elementButton4)

    const backButton = document.createElement('button');
    backButton.innerHTML = "Back";
    backButton.onclick = function () {
        menu();

    }

    content.appendChild(backButton)
}



