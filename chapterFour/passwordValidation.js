const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const logInBtn = document.getElementById('btn-pass');
const logInStatement = document.getElementById('logInStatement');

logInBtn.addEventListener('click', (e) => {
  e.preventDefault();

  for (let user of users) {
    console.log(user);
    if (usernameField.value == user.username && passwordField.value == user.password) {
      logInStatement.textContent = `Welcome, ${user.username}!`;
      usernameField.value = '';
      passwordField.value = '';
      return;
    }
  }
  logInStatement.textContent = "I don't know you.";

  usernameField.value = '';
  passwordField.value = '';
});
