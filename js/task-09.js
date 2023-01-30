function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const colorVisualAidRef = document.querySelector('.color');
const tagBodyRef = document.querySelector('body');

changeColorBtnRef.addEventListener('click', event => {
  const randomColor = getRandomHexColor();
  colorVisualAidRef.textContent = randomColor;
  tagBodyRef.style.backgroundColor = randomColor;
});
