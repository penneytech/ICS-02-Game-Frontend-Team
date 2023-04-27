
export default function play() {

  let content = document.getElementById('content')
  content.innerHTML = "";

  const Container = document.createElement("div");
  Container.style.display = "flex";
  Container.style.flexDirection = "column";
  
  content.appendChild(Container)
}
