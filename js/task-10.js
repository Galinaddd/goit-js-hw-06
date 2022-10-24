const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector(' [data-create]');
const btnDestroyRef = document.querySelector(' [data-destroy]');
const divRef = document.querySelector('#boxes');

console.log(divRef);

btnCreateRef.addEventListener('click', () => createBoxes(Number(inputRef.value)));
btnDestroyRef.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const markup = [];
  let divSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = divSize + 'px';
    div.style.height = divSize + 'px';
    divSize += 10;
    div.style.backgroundColor = getRandomHexColor();
    markup.push(div);
    console.log(div);
  }
  divRef.append(...markup);
}

function destroyBoxes() {
  divRef.innerHTML = '';
}

// createBoxes(5);
