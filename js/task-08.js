const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
	event.preventDefault();

	const {
		elements: { email, password },
	} = event.currentTarget;

	// const mail = event.currentTarget.elements[0].value;
	// const password = event.currentTarget.elements[1].value;

	if (email.value === '' && password.value === '') {
		alert('Все поля должны быть заполнены!');
	}

	const formData = {
		mail: email.value,
		password: password.value,
	};

	console.log(formData);

	event.currentTarget.reset();
}
