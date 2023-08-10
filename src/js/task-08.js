const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();

    const {
    elements: { email, password }
    } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
       const data = {
        email: email.value,
        password: password.value,
    }
      console.log(data)
      evt.currentTarget.reset();
    }
}
