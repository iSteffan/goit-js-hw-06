const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

//  task 1-4
const arrayForSpread = [];

ingredients.map(element => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = element;
  listItemRef.classList.add('item');
  return arrayForSpread.push(listItemRef);
});

const listAnchorRef = document.querySelector('#ingredients');
listAnchorRef.append(...arrayForSpread);
