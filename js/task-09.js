const bodyEl = document.body;
const changeColorBtnEl = document.querySelector('.change-color');
const colorTextEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
	bodyEl.style.backgroundColor = getRandomHexColor();
	colorTextEl.textContent = bodyEl.style.backgroundColor;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
