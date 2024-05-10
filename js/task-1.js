const categoriesListEl = document.querySelector('#categories');

const categoriesQuantity = categoriesListEl.children.length;
console.log('Number of categories:', categoriesQuantity);

[...categoriesListEl.children].forEach(item => {
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.querySelectorAll('.item').length);
});
