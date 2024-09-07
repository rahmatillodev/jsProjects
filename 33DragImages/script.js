let graphic = document.querySelector(".graphic");
let itemSrc = null;
function drag(event) {
  itemSrc = event.target.src;
  graphic.classList.add("drag");
}
function dragEnd() {
  graphic.classList.remove("drag");
}



function drop() {
  let img = document.createElement("img");
  img.src = itemSrc;
  graphic.innerHTML = "";
  graphic.appendChild(img);
  graphic.classList.remove("drag");
}
function allowDrop(event) {
  event.preventDefault();
}
