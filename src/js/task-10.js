const refs = {
  controls: document.querySelector("#controls"),
  input: document.querySelector("#controls > input"),
  btnCreateBoxes: document.querySelector("#controls > button:nth-child(2)"),
  btnDestroyBoxes: document.querySelector("#controls > button:last-child"),
  boxes: document.querySelector("#boxes"),
}
const { controls, input, btnCreateBoxes, btnDestroyBoxes, boxes } = refs;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let step = 20;  

function createBoxes(amount) {
  const totalMarkup = [];
  for (let i = 1; i <= amount; i += 1) {
    step += 10;
    const getHexColor = getRandomHexColor();
    totalMarkup.push(`<div style="width: ${step}px; height: ${step}px; background-color: ${getHexColor};"></div>`)
  } 
  boxes.insertAdjacentHTML("beforeend", totalMarkup.join(""));
}

function onInputChange() { 
  const selectedNumber = Number(input.value);
  createBoxes(selectedNumber) 
}
btnCreateBoxes.addEventListener("click", onInputChange)

function destroyBoxes() { 
  boxes.innerHTML = "";
  step = 20;
  input.value = "";
}
btnDestroyBoxes.addEventListener("click", destroyBoxes)

function onKeyPress(evt) {
  if (evt.code === "Enter") {
    onInputChange()
  }
  if (evt.code === "Escape") { 
    destroyBoxes()
  }
}
document.addEventListener("keydown", onKeyPress)