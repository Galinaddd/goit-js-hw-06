const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

buttonRef.addEventListener('click', onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onButtonClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = document.body.style.backgroundColor;
  console.log(document.body.style.backgroundColor);
}
