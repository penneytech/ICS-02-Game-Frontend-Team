import { getGlobal, setGlobal } from "../globals.js";

export default function moveOpponents(message) {
    let userMap = getGlobal('userMap'); // Assuming userMap is a dictionary with usernames as keys.

    // Parse the message if it's a string
    if (typeof message === "string") {
        message = JSON.parse(message);
    }

    // If the user exists in the map, update the user's properties.
    if (userMap.has(message.username)) {
        userMap.get(message.username).x = message.x;
        userMap.get(message.username).y = message.y;
        userMap.get(message.username).type = message.type;
        userMap.get(message.username).character = message.character;
    } else {
        // If the user doesn't exist in the map, add them to the map.
        userMap.set(message.username, {
            username: message.username,
            x: message.x,
            y: message.y,
            type: message.type,
            character: message.character,
        });
    }

    // Update the global userMap with the modified userMap.
    setGlobal('userMap', userMap);
}
