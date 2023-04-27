import customization from "./customization.js";
import play from "./play.js";
import stats from "./stats.js";


export default function menu() {

    let content = document.getElementById('content')
    content.innerHTML = "";

    // Create a container div for the menu
    const menuContainer = document.createElement("div");
    menuContainer.style.display = "flex";
    menuContainer.style.flexDirection = "column";

    // Create three button elements
    const button1 = document.createElement("button");
    button1.textContent = "Play";
    button1.onclick = function() {
        console.log("ambers")
        play()
    }

    const button2 = document.createElement("button");
    button2.textContent = "Stats";
    button2.onclick = function() {
        stats()
    }

    const button3 = document.createElement("button");
    button3.textContent = "Customization";
    button3.onclick = function() {
        console.log("amber")
        customization()
    }

    // Add the buttons to the container
    menuContainer.appendChild(button1);
    menuContainer.appendChild(button2);
    menuContainer.appendChild(button3);

    // Add the container to the page
    content.appendChild(menuContainer);
}
