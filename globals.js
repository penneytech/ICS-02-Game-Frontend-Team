/*
This code defines an object to hold the global variables and two functions to set and retrieve global variables.
*/

// Define an object to hold the global variables
const globals = {
    socket: [],
    canvasWidth: 600,
    canvasHeight: 600,
    ctx: [],
    playerposition: { "x": 300, "y": 300, "width": 50, "height": 50 },
    username: "",
    points: 0,
    element: "water",
    character: "Mage",
    timeremaining: 0,
    ingameleaderboard: [
        { "username": "user1", "score": 0 },
        { "username": "user2", "score": 0 },
        { "username": "user3", "score": 0 },
    ],
    treasure: [],
    mapWidth: 1280,
    mapLength: 1920,
    tileSize: 32,
    characters: [],
    speed: 4,
    userMap: [],
    myscore: 0,
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