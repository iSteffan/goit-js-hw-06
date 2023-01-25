const increaseBtnRef = document.querySelector('[data-action="increment"]');
const decreaseBtnRef = document.querySelector('[data-action="decrement"]');
const btnValueRef = document.querySelector('#value');

let counterValue = 0;

const onIncreaseBtnClick = () => {
  counterValue += 1;
  btnValueRef.textContent = counterValue;
};
const onDecreaseBtnClick = () => {
  counterValue -= 1;
  btnValueRef.textContent = counterValue;
};

increaseBtnRef.addEventListener('click', onIncreaseBtnClick);
decreaseBtnRef.addEventListener('click', onDecreaseBtnClick);
