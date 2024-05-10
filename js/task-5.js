function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  colorLabelEl: document.querySelector('.js-color'),
  changeColorBtn: document.querySelector('.change-color'),
};

refs.changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  refs.colorLabelEl.textContent = randomColor;
}
