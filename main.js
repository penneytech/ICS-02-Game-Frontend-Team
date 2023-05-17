// This is the entrypoint file that ties every other file together, and calls the initial modules

// Run the socket module to establish a connection with the server
import './socket/socket.js';

// Register keypress events
import './game/keyPress.js';

// Register Joystick
import './game/joystick.js';

import initGame from './game/initGame.js';
import { isMobile } from './game/isMobile.js';
import { timer } from './game/timer.js';
import { loadMapImages } from './map/loadMapImages.js'
import { loadCharacterImages } from './characters/loadCharacterImages.js'

import menu from './pages/menu.js'
import { getGlobal, setGlobal } from './globals.js';
import { initopponents } from './socket/initOpponents.js';

import loginDialogue from './pages/loginDialogue.js';

// Create a new userMap object with dummy opponents

let userMap = new Map();

const opponents = [
  // {
  //   username: "user1",
  //   type: 'water',
  //   character: 'piratemage',
  //   x: 100,
  //   y: 200,
  // },
  // {
  //   username: "user2",
  //   type: 'water',
  //   character: 'piratemage',
  //   x: 300,
  //   y: 150,
  // },
  // {
  //   username: "user3",
  //   type: 'water',
  //   character: 'piratemage',
  //   x: 200,
  //   y: 350,
  // },
];

opponents.forEach(opponent => {
  userMap.set(opponent.username, opponent);
});

setGlobal('userMap', userMap);

//initopponents();

async function startGame() {

  // Load Map Images
  loadMapImages().then(() => {

    //Load Character Images
    loadCharacterImages().then(() => {
      //Load Character Images

      isMobile();
      //initGame()
      loginDialogue();

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
