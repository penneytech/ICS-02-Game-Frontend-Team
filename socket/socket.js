/*
This code connects to the server and sets the socket global variable using the io function from the 'socket.io-client' module.
*/

// File and function imports
import { getGlobal, setGlobal } from '../globals.js';
import loginFail from './loginFail.js';
import loginSucceed from './loginSucceed.js';
import moveOpponents from '../opponents/moveOpponents.js';
import { timer } from '../game/timer.js';

// Connect to the server and set the socket global variable
//const socket = io("https://ics-02-game-backend-team.paulpenney.repl.co");
const socket = io("http://localhost:3000");

setGlobal('socket', socket);

// Actions that happen when the connection is established
socket.on("connect", () => {
    console.log("Connected to server");
    // Identify with server
    socket.emit("ident", "client");
});

// When a message is received from the server
socket.on("message", (message) => {
    console.log("Received message:", message);
});

// When a login fails, receive a message from the server
socket.on("loginFailed", (message) => {
    loginFail(message);
});

// When a login succeeds, fetch the gameHTML and start the game
socket.on("loginSucceed", (message) => {
    loginSucceed(message);
});

// // Receive treasure from backend
socket.on("treasureinit", (message) => {
    console.log("treasure set:", message)
    setGlobal('treasure', message)
});

// Get leaderboard from the server
socket.on("leaderboard", (message) => {
    setGlobal('leaderboard', message)
});

// Get ingameleaderboard from the server
socket.on("ingameleaderboard", (message) => {
    setGlobal('ingameleaderboard', message)
});

// Get my score
socket.on("myscore", (message) => {
    setGlobal('myscore', message)
});


// // Receive treasure from backend
socket.on("treasureupdate", (message) => {
    console.log("treasure set:", message)
    let treasure = getGlobal('treasure');
    treasure[message.index].x = message.x;
    treasure[message.index].y = message.y;
    setGlobal('treasure', treasure);
});

// Receive opponent positions from backend
socket.on("clientupdateposition", (message) => {
    moveOpponents(message);
});

// Receive opponent positions from backend
socket.on("userdata", (message) => {
    console.log("userdata:", message);

    setGlobal('userdata', message);
    setGlobal('character', message.character);
    setGlobal('element', message.element);
});

// Receive time from backend
// socket.on("", (message) => {
//   timer(message);
// });

// socket.on("clientspawn", (message) => {
//   console.log("Recieved Initial Position:", message);
//   let playerposition = getGlobal('playerposition');
//   playerposition.x = message.x;
//   playerposition.y = message.y;
//   setGlobal('playerposition', playerposition);
// });
