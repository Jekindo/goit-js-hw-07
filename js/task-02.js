const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientsItems = ingredients.map((ingredient) => {
	const item = document.createElement('li');
	item.classList.add('item')
	item.textContent = ingredient;

	return item;
});

ingredientsListEl.append(...ingredientsItems);