const textInputRef = document.querySelector('#validation-input');

let amount = 0;

textInputRef.addEventListener('blur', event => {
  amount = event.target.value.length;
  console.log(amount);
  if (amount === Number(textInputRef.dataset.length)) {
    textInputRef.classList.remove('invalid');
    return textInputRef.classList.add('valid');
  } else {
    textInputRef.classList.remove('valid');
    return textInputRef.classList.add('invalid');
  }
});
