const formSelect = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector(
  'input[name="password"]'
);

formSelect.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === '' || password === '') {
    alert('Please enter a valid email & password');
    return;
  }
  console.log({ email, password });
  formSelect.reset();
});
