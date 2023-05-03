
export default function customization() {

    let content = document.getElementById('content')
    content.innerHTML = "";
  
    let characterBar = document.createElement('div');
    characterBar.id = "characterbar";
    content.innerHTML= "!!!";
  
    let characterContainer = document.createElement('div');
    characterContainer.id = "characterbar";
    characterContainer.innerHTML = "characters";

    let elementContainer = document.createElement('div');
    elementContainer.id = "characterbar";
    elementContainer.innerHTML = "elments";

    


    content.appendChild(characterContainer)
  content.appendChild(elementContainer)
   
} 