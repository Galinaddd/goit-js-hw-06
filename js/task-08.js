const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(ev) {
  ev.preventDefault();

  const { email, password } = ev.currentTarget.elements;

  if (email.value === '' || password.value === '') alert('Please fill in all the fields!');
  else {
    const obj = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);
    formRef.reset();
  }
}
