function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

 function getColor(){
   const getHexColor = getRandomHexColor();
   hexColor.textContent = `${getHexColor}`;
   body.style.backgroundColor = `${getHexColor}`;
}
  const body = document.querySelector("body")
  const hexColor = document.querySelector(".color")
  const btnChangeColor = document.querySelector(".change-color")

  btnChangeColor.addEventListener("click", getColor)