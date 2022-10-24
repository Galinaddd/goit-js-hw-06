const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
inputRef.addEventListener('input', onInput);

function onInput(ev) {
  spanRef.textContent = ev.currentTarget.value;
  if (!ev.currentTarget.value) spanRef.textContent = 'Anonymous';
}
