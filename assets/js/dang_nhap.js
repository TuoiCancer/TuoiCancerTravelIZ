const form = document.getElementById("login__form");
const userName = $("#username");
const password = $("#password");
const loginBtn = $("login-btn");

var er1 = (er2 = 0);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
  if (er1 === er2 && er2 === 0) {
    window.location.href = "../trangchu.html";
  }
});

function checkInput() {
  const usernameValue = username.value;
  const passwordValue = password.value;
  if (usernameValue === "") {
    er1++;
    setErrorFor(userName, "Tên tài khoản không được để trống!");
  } else {
    er1 = 0;
    setSuccessFor(username);
  }
  if (passwordValue === "") {
    er2++;
    setErrorFor(password, "Mật khẩu không được để trống!");
  } else {
    er2 = 0;
    setSuccessFor(password);
  }
}

function setErrorFor(className, message) {
  const formItem = className.parentElement;
  const small = formItem.querySelector("span");
  small.innerText = message;
  formItem.className = "login__item error";
}

function setSuccessFor(username) {
  const formItem = username.parentElement;
  formItem.className = "login__item";
}
