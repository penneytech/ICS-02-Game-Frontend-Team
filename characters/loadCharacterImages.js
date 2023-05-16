import { setGlobal } from "../globals.js";

// List of folders that contain the character images (four images per character)
let characters = ['Mage'];

let characterimages = {}

export function loadCharacterImages() {

  return new Promise((resolve) => {
    console.log("LOADING IMAGES");

    let numLoaded = 0;
    let numImages = characters.length * 4;

    characters.forEach((character, index) => {
      characterimages[character] = [];

      for (let i = 0; i < 4; i++) {
        const imagename = i.toString();
        characterimages[character][i] = new Image();
        characterimages[character][i].onload = () => {
          console.log(`Loaded image ${imagename} for character ${character}`);
          numLoaded++;
          if (numLoaded === numImages) {
            setGlobal('characters', characterimages);
            resolve();
          }
        };
        characterimages[character][i].onerror = () => {
          console.log(`Error loading image ${imagename} for character ${character}`);
          numLoaded++;
          if (numLoaded === numImages) {
            setGlobal('characters', characterimages);
            resolve();
          }
        };
        characterimages[character][i].src = `../characters/${character}/${imagename}.gif`;
      }
    });
  });
}
