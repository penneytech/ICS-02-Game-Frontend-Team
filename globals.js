/*
This code defines an object to hold the global variables and two functions to set and retrieve global variables.
*/

// Define an object to hold the global variables
const globals = {
    socket: [],
    canvas: [],
    ctx: [],
    playerposition: { "x": 200, "y": 200, "width": 50, "height": 50 },
    points: 0,
    treasure: [
        { "x": 350, "y": 50, "type": "Amber" },
        { "x": 300, "y": 50, "type": "Ruby" },
        { "x": 250, "y": 50, "type": "Sapphire" },
        { "x": 200, "y": 50, "type": "Amber" },
        { "x": 150, "y": 50, "type": "Ruby" },
        { "x": 100, "y": 50, "type": "Sapphire" },
        { "x": 50, "y": 50, "type": "Amber" }
    ],
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
