const inputRangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRangeRef.addEventListener('input', onInputRangeChacge);

function onInputRangeChacge(ev) {
  spanRef.style.fontSize = ev.currentTarget.value + 'px';
}
