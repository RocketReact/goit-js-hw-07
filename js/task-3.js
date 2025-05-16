const getInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

getInput.addEventListener('input', (e) => {
  const trimValue = e.target.value.trim();
  output.textContent = trimValue === '' ? 'Anonymous' : trimValue;
});
