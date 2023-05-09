import { getGlobal, setGlobal } from "../globals.js";

//const images = getGlobal('mapimages');

/*
RENDER IMAGES BY MAP
*/

const tileSize = 32;

// New Change! 
export function generateMap(map) {
    const images = getGlobal('mapimages');

    const canvas = getGlobal("canvas");
    const ctx = getGlobal("ctx");
    const mapWidth = 40;
    const tileSize = 32;
    const renderDistance = 100;
    const playerposition = getGlobal("playerposition");
    const playerTileX = Math.floor(playerposition.x / tileSize);
    const playerTileY = Math.floor(playerposition.y / tileSize);

    for (let x = playerTileX - renderDistance; x <= playerTileX + renderDistance; x++) {
        for (let y = playerTileY - renderDistance; y <= playerTileY + renderDistance; y++) {
            const tileX = x * tileSize - playerposition.x + canvas.width / 2;
            const tileY = y * tileSize - playerposition.y + canvas.height / 2;
            if (tileX >= -tileSize && tileX <= canvas.width && tileY >= -tileSize && tileY <= canvas.height) {
                const tileIndex = Math.max(0, y * mapWidth + x);
                
                    try {
                        if (map[tileIndex] !== undefined) {
                        ctx.drawImage(images[map[tileIndex]], tileX, tileY, tileSize, tileSize);
                        }
                    } catch (e) {
                        //console.log('[GenerateMap]: ERROR on ' + tileIndex, e)
                    }
                
            }
        }
    }
}

