let counterValue = Number(document.querySelector('#value').textContent);
const valueEl = document.querySelector('#value');
const decrementBtnEL = document.querySelector('[data-action="decrement"]');
const incrementBtnEL = document.querySelector('[data-action="increment"]');

function increment() {
	counterValue += 1;
	valueEl.textContent = counterValue;
}

function decrement() {
	counterValue -= 1;
	valueEl.textContent = counterValue;
}

incrementBtnEL.addEventListener('click', increment);
decrementBtnEL.addEventListener('click', decrement);
