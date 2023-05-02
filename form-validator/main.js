const passwordInput = document.querySelector('#password');
const passwordValidation = document.querySelector('#password-validation');

passwordInput.addEventListener('submit', () => {
  const password = passwordInput.value;
  if (password.length < 8) {
    passwordValidation.textContent = 'Password must be at least 8 characters long';
  } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    passwordValidation.textContent = 'Password must contain both letters and numbers';
  } else {
    passwordValidation.textContent = 'Password is valid';
  }
});