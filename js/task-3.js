const refs = {
  inputEl: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', evt => {
  const inputValue = evt.currentTarget.value.trim();

  refs.output.textContent = inputValue;

  if (inputValue === '') {
    refs.output.textContent = 'Anonymous';
  }
});
