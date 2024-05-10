const refs = {
  boxesContainer: document.querySelector('#boxes'),
  input: document.querySelector('input[name="boxes-amount"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
};

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onCreateBtnClick() {
  if (refs.input.value < 1 || refs.input.value > 100) {
    alert('Boxes amount should be in area 1-100');
    return;
  }

  const boxes = createBoxes(refs.input.value);

  destroyBoxes();

  refs.boxesContainer.append(...boxes);

  refs.input.value = '';
}

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.height = `${30 + i * 10}px`;
    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();

    boxes.push(boxEl);
  }

  return boxes;
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
