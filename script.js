function goToLogin() {
  window.location.href = 'login.html';
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'admin') {
    alert('Вход выполнен успешно!');
    window.location.href = 'admin.html';
  } else {
    showAlert('Неправильные данные для входа');
  }
  return false;
}

function logout() {
  showAlert('Вы успешно вышли!');
  setTimeout(() => {
    window.location.href = 'home.html';
  }, 1000);
}

function showAlert(message) {
  const alertBox = document.createElement('div');
  alertBox.className = 'alert';
  alertBox.innerText = message;
  document.body.appendChild(alertBox);
  setTimeout(() => {
    alertBox.remove();
  }, 3000);
}