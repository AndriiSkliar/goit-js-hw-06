const input = document.querySelector("#validation-input")
input.addEventListener("blur", addClass)

function addClass() {
    const inputLength = Number(input.getAttribute("data-length"));
    
    input.value.trim().length === inputLength
        ? (input.classList.remove('invalid'), input.classList.add('valid'))
        : (input.classList.remove('valid'), input.classList.add('invalid'))
};
  
