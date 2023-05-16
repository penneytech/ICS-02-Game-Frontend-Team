import { getGlobal, setGlobal } from "../globals.js";

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

    for (let i = 0; i < treasure.length; i++) {
        let piece = treasure[i];
        if ((playerposition.x - width) < piece.x + width &&
            (playerposition.x - width) + playerposition.width > piece.x &&
            (playerposition.y - height) < piece.y + height &&
            (playerposition.y - height) + playerposition.height > piece.y) {
            let socket = getGlobal('socket');
            socket.emit("gemcollected", i);
            console.log("Hit detected with:", piece, i);

            // Remove the gem from the local array
            treasure.splice(i, 1);
            setGlobal('treasure', treasure);
            // Since we've modified the array, break out of the loop
            break;
        }
    }
} // End of collectTreasure
