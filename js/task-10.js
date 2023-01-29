function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input[type="number"]');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const collectionOfBoxesRef = document.querySelector('#boxes');

let boxesAmount = 0;

const inputHandler = event => {
  boxesAmount = Number(event.currentTarget.value);
};

function createBoxes(amount) {
  let boxArray = [];

  for (let i = 0; i < amount; i += 1) {
    const collectionEl = document.createElement('div');
    collectionEl.style.width = `${i * 10 + 30}px`;
    collectionEl.style.height = `${i * 10 + 30}px`;
    collectionEl.style.backgroundColor = getRandomHexColor();

    boxArray.push(collectionEl);
  }

  return boxArray;
}

function destroyBoxes() {
  collectionOfBoxesRef.innerHTML = '';
}

inputRef.addEventListener('input', inputHandler);

createBtnRef.addEventListener('click', () => {
  collectionOfBoxesRef.append(...createBoxes(boxesAmount));
});

destroyBtnRef.addEventListener('click', () => {
  destroyBoxes();
});
