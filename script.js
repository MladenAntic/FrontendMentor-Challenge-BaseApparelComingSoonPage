const input = document.getElementById("email");
const submit = document.getElementById("submit");
const errorIcon = document.querySelector(".icon-error");
const errorMessage = document.querySelector('.error-message')

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.checkValidity() || input.value === '') {
    input.style.borderColor = 'red'
    errorIcon.style.display = "block";
    errorMessage.style.display = "block";
  } else {
    input.style.borderColor = 'var(--desaturated-red)'
    errorIcon.style.display = "none";
    errorMessage.style.display = "none";
  }
});
