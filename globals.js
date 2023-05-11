/*
This code defines an object to hold the global variables and two functions to set and retrieve global variables.
*/

// Define an object to hold the global variables
const globals = {
    socket: [],
    canvasWidth: 400,
    canvasHeight: 400,
    ctx: [],
    playerposition: { "x": 200, "y": 200, "width": 50, "height": 50 },
    points: 0,
    treasure: [],
    mapWidth: 1280,
    mapLength: 1920,
    tileSize: 32,
    characters: [],
    speed: 4,
};

// Define a function to set a global variable
export function setGlobal(name, value) {
    //console.log(`Setting global variable '${name}' to '${value}'`);
    globals[name] = value;
}

// Define a function to get a global variable
export function getGlobal(name) {
    //console.log(`Getting global variable '${name}': '${globals[name]}'`);
    return globals[name];
}