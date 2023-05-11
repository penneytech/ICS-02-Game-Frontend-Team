// This is the entrypoint file that ties every other file together, and calls the initial modules

// Run the socket module to establish a connection with the server
import './socket/socket.js';

// Register keypress events
import './game/keyPress.js';

// Register Joystick
import './game/joystick.js';

import initGame from './game/initGame.js';
import { isMobile } from './game/isMobile.js';
import { loadMapImages } from './map/loadMapImages.js'
import { loadCharacterImages } from './characters/loadCharacterImages.js'

async function startGame() {

    // Load Map Images
  loadMapImages().then(() => {

      //Load Character Images
  loadCharacterImages().then(() => {
      //Load Character Images

      
      isMobile()
      initGame()
     }).catch(error => {
        console.log(error)
        // handle error here
     });
  }).catch(error => {
    console.log(error)
    // handle error here
  });
}

startGame();
// import './pages/loginDialogue.js'


// Import login dialoguie
// import loginDialogue from './pages/loginDialogue.js'
// loginDialogue(); 

// // Load customization screen
// import customization from './pages/customization.js'
// customization(); 

// // Import menu function
// import menu from './pages/menu.js'
// menu();

// import initGame from './game/initGame.js';
// initGame();
