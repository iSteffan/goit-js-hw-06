const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', event => {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  const objData = {
    email,
    password,
  };

  if (email === '' || password === '') {
    return alert('Write down all data in the fields');
  }

  console.log(objData);

  event.currentTarget.reset();
});
