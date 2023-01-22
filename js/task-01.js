//  Task 1
const categoriesAmountRef = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesAmountRef.length);

//  Task 2
categoriesAmountRef.forEach(function (item) {
  console.log('Category:', `${item.firstElementChild.textContent}`);
  console.log('Elements:', `${item.lastElementChild.children.length}`);
});
