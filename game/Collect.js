import { getGlobal } from "../globals.js";

import { getTreasure } from "./treasure.js";

// Define a function to handle a hit detection/collection
function collectGem(data, socket, io) {
    console.log("");
}

let hitDetected = false;
let messageSent = false;
const height = 30;
const width = 30;

export function collectTreasure(playerRect, treasureRect) {

    const treasure = getGlobal('treasure');
    const playerposition = getGlobal('playerposition');
    const ctx = getGlobal('ctx');

    // draw circle
    ctx.beginPath();
    ctx.arc(playerposition.x, playerposition.y, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    treasure.forEach((piece, index) => {
        if ((playerposition.x - width / 2) < piece.x + width &&
            (playerposition.x - width / 2) + playerposition.width > piece.x &&
            (playerposition.y - height / 2) < piece.y + height &&
            (playerposition.y - height / 2) + playerposition.height > piece.y) {
            hitDetected = true;
            if (messageSent == false) {
                let socket = getGlobal('socket');
                socket.emit("gemcollected", index);
                console.log("Hit detected with:", piece, index);
                messageSent = true;
            }

        } // End of if statement
    }); // End of foreach

    if (hitDetected == false) {
        messageSent = false;
    }

    hitDetected = false;

} // End of collectTreasure
