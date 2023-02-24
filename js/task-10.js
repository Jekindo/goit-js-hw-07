const boxesEl = document.querySelector('#boxes');

const contorlsRefs = {
	number: document.querySelector('#controls').firstElementChild,
	renderBtn: document.querySelector('[data-action="render"]'),
	destroyBtn: document.querySelector('[data-action="destroy"]'),
};

contorlsRefs.renderBtn.addEventListener('click', () => {
	contorlsRefs.number.value = '';
	createBoxes(Number(contorlsRefs.number.value));
});

contorlsRefs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
	const boxes = [];

	for (let i = 0; i < amount; i += 1) {
		const box = document.createElement('div');
		box.style.backgroundColor = getRandomHexColor();
		box.style.width = `${30 + i * 10}px`;
		box.style.height = `${30 + i * 10}px`;

		boxes.push(box);
	}
	
	boxesEl.append(...boxes);
}

function destroyBoxes() {
	boxesEl.innerHTML = '';
	contorlsRefs.number.value = '';
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
