const input = document.querySelector("#validation-input")
input.addEventListener("blur", addClass)

function addClass() {
    input.value.length == input.getAttribute("data-length")
        ? input.classList.add('valid')
        : input.classList.add('invalid')
};
  
input.addEventListener("focus", () => input.classList.remove('valid', 'invalid'))
