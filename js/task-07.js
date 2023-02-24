const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('change', onInputFontSizeChange);

function onInputFontSizeChange(event) {
	textEl.style.fontSize = event.currentTarget.value + 'px';
}
