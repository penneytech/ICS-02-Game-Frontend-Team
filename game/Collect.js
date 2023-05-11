import { getGlobal } from "../globals.js";

import { getTreasure } from "./treasure.js";

// Define a function to handle a hit detection/collection
function collectGem(data, socket, io) {
  console.log("");
}

let hitDetected = false;
let messageSent = false;
const height = 8;
const width = 8;

export function collectTreasure(playerRect, treasureRect) {

  const treasure = getGlobal('treasure');
  const playerposition = getGlobal('playerposition');

  treasure.forEach((piece, index) => {
    if (playerposition.x < piece.x + width &&
      playerposition.x + playerposition.width > piece.x &&
      playerposition.y < piece.y + height &&
      playerposition.y + playerposition.height > piece.y) {
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


    // Send message to the server/backend saying that gem was collected with Index value


// socket.emit(piece, index, 'gemCollected');

// Export the function for other modules to use
//module.exports = collectGem;