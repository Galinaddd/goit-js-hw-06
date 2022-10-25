const countValueRef = document.querySelector('#value');
const decrBtnRef = document.querySelector('[data-action="decrement"]');
const incrBtnRef = document.querySelector('[data-action="increment"]');

let counterValue = Number(countValueRef.textContent);
console.log(counterValue);
decrBtnRef.addEventListener('click', onDecrBtnClick);
incrBtnRef.addEventListener('click', onIncrBtnClick);

function onDecrBtnClick() {
  counterValue -= 1;
  setCounterValue();
}

function onIncrBtnClick() {
  counterValue += 1;
  setCounterValue();
}
function setCounterValue() {
  countValueRef.textContent = counterValue;
}
