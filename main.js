const form = document.querySelector('.hero__form')
console.log(form);
const email = document.querySelector('input[type="email"');
console.log(email);
const formBtn = document.querySelector('.form__btn');
console.log(formBtn);
const inputError = document.querySelector('.error');
console.log(inputError);


form.addEventListener('submit', event => {
  console.log("Função Submit OK");
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  console.log("Função showError ok");
  if (email.validity.valueMissing) {
    inputError.textContent = "The field cannot be empty";
  } else if (email.validity.typeMismatch) {
    inputError.textContent = "Oops! Please check your email";
  }
};
