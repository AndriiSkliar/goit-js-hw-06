const input = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

input.addEventListener("input", scaleText);

function scaleText() { 
    const inputValue = input.value;
    text.style.fontSize = `${inputValue}px`;
}
scaleText()