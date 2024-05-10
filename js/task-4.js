const formEl = document.querySelector('.js-login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const formData = {
    email: form.email.value.trim(),
    password: form.password.value.trim(),
  };
  const formValues = Object.values(formData);
  const isFormComplete = formValues.every(value => value !== '');

  if (!isFormComplete) {
    alert('All form fields must be filled in');
    return;
  }

  console.log('formData:', formData);

  form.reset();
}
