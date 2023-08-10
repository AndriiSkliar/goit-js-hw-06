const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
const savedSpanValue = textOutput.textContent;

textInput.addEventListener("input", event => {
    const inputValue = event.currentTarget.value;
        
    inputValue === ""
        ? textOutput.textContent = savedSpanValue
        : textOutput.textContent = inputValue
});