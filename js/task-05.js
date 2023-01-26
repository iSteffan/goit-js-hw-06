const textInputRef = document.querySelector('#name-input');
const textOutputRef = document.querySelector('#name-output');

textInputRef.addEventListener('input', event => {
  if (event.target.value === '') {
    return (textOutputRef.textContent = 'Anonymous');
  }
  return (textOutputRef.textContent = event.currentTarget.value);
});
