const categoriesListEl = document.querySelector('#categories');
const arrayCategoriesEl = categoriesListEl.querySelectorAll('.item');

console.log(`В списке ${arrayCategoriesEl.length} категории.`);

// for (let i = 0; i < arrayCategoriesEl.length; i += 1) {
// 	const itemsInCurrentCategoryEl = arrayCategoriesEl[i].querySelectorAll('li');
// 
// 	console.log(`Категория: ${arrayCategoriesEl[i].firstElementChild.textContent}`);
// 	console.log(`Количество элементов: ${itemsInCurrentCategoryEl.length}`);
// }

arrayCategoriesEl.forEach((item) => {
	console.log(`Категория: ${item.firstElementChild.textContent}`);
	console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});
