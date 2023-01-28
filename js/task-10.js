function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input[type="number"]');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const collectionParentRef = document.querySelector('#boxes');

let boxesAmount = 0;

const inputHandler = event => {
  boxesAmount = Number(event.currentTarget.value);
  console.log(boxesAmount);
};

function createBoxes(amount) {
  const collectionEl = document.createElement('div');

  for (let i = 0; i <= amount; i += 1) {
    collectionEl.style.width = `${i * 10 + 30}px`;
    collectionEl.style.height = `${i * 10 + 30}px`;
  }
}

function destroyBoxes() {}

inputRef.addEventListener('input', inputHandler);
createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

console.log(inputRef);
console.log(createBtnRef);
console.log(destroyBtnRef);
