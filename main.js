// This is the entrypoint file that ties every other file together, and calls the initial modules

// Run the socket module to establish a connection with the server
import './socket/socket.js'

// Register keypress events
import './game/keyPress.js'

// Register Joystick
import './game/joystick.js'

import initGame from './game/initGame.js';
import { isMobile } from './game/isMobile.js';
import { loadImages } from './game/loadImages.js'

async function startGame() {
  loadImages().then(() => {
    isMobile()
   // initGame()
  }).catch(error => {
    console.log(error)
    // handle error here
  });
}

startGame();

// Import login dialoguie
// import loginDialogue from './pages/loginDialogue.js'
// loginDialogue(); 

// // Import menu function
  import menu from './pages/menu.js'
  menu();