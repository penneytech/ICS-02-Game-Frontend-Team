
export default function customization() {

    let content = document.getElementById('content')
    content.innerHTML = "";
  
    let characterBar= document.getElementById('characterbar')
    content.innerHTML= "!!!";
  
    let characterContainer = document.createElement('div');
    characterContainer.innerHTML = "characters";

    let elementContainer = document.createElement('div');
    elementContainer.innerHTML = "elments";

    


    content.appendChild(characterContainer)
  content.appendChild(elementContainer)
   
} 