const inputFontSizeRef = document.querySelector('#font-size-control');
const outputTextRef = document.querySelector('#text');

inputFontSizeRef.addEventListener('input', event => {
  outputTextRef.style.fontSize = event.target.value + 'px';
});
