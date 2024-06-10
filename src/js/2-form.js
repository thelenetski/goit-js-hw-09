'use sctrict';

let formData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (!(formData instanceof Object))
  formData = {
    email: '',
    message: '',
  };

const Form = document.querySelector('.feedback-form');

Form.elements.email.value = formData.email;
Form.elements.message.value = formData.message;

Form.addEventListener('input', handleInput);
Form.addEventListener('submit', handleSubmit);

function handleInput() {
  formData.email = Form.elements.email.value.trim();
  formData.message = Form.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (email === '' || message === '') {
    return alert('Fill please all fields');
  } else {
    formData.email = email.trim();
    formData.message = message.trim();

    console.log(formData);
  }

  formData.email = '';
  formData.message = '';
  localStorage.clear();
  form.reset();
}
