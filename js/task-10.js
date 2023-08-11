const refs = {
  controls: document.querySelector("#controls"),
  input: document.querySelector("#controls > input"),
  inputMinValue: Number(document.querySelector("#controls > input").getAttribute("min")),
  inputMaxValue: Number(document.querySelector("#controls > input").getAttribute("max")),
  inputStepValue: Number(document.querySelector("#controls > input").getAttribute("step")),
  btnCreateBoxes: document.querySelector("#controls > button:nth-child(2)"),
  btnDestroyBoxes: document.querySelector("#controls > button:last-child"),
  boxes: document.querySelector("#boxes"),
}
const { controls, input, inputMinValue, inputMaxValue, inputStepValue, btnCreateBoxes, btnDestroyBoxes, boxes } = refs;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amount = Number(input.value);

function createBoxes(amount) {
  if (amount < inputMinValue || amount > inputMaxValue) {
    alert(`Please enter a value from ${inputMinValue} to ${inputMaxValue}!`);
    return
  }
  
  let step = 20;  
  const totalMarkup = [];
  for (let i = inputMinValue; i <= amount; i += inputStepValue) {
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


