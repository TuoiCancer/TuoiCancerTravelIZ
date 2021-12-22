const form = document.getElementById("signup__form");
const username = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password_confirmation");
var count = 0;
var er1 = (er2 = er3 = er4 = 0);

form.addEventListener("submit", (e) => {
  e.preventDefault(); //

  checkInputs();
  console.log(count);
  if (er1 === er2 && er2 === er3 && er3 === er4 && er4 === 0) {
    window.location.href = "../trangchu.html";
  }
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, "Họ tên không được để trống!");
    er1++;
  } else {
    //add success class
    setSuccessFor(username);
    er1 = 0;
  }
  if (emailValue === "") {
    setErrorFor(email, "Email không được để trống!");
    er2++;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "không đúng định dạng email vd: xt@gmail.com");
    er2++;
  } else {
    setSuccessFor(email);
    er2 = 0;
  }
  if (passwordValue == "") {
    setErrorFor(password, "Mật khẩu không được để trống!");
    er3++;
  } else if (!isFullChar(passwordValue)) {
    setErrorFor(password, "Mật khẩu phải có tối đa 8 kí tự!");
    er3++;
  } else {
    setSuccessFor(password);
    er3 = 0;
  }
  if (password2Value == "") {
    setErrorFor(password2, "Mật khẩu không được để trống!");
    er4++;
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Mật khẩu không khớp!");
    er4++;
  } else {
    setSuccessFor(password2);
    er4 = 0;
  }
}

function setErrorFor(username, message) {
  const formControl = username.parentElement;
  const small = formControl.querySelector("span");
  small.innerText = message;
  formControl.className = "form-group error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-group success";
}

function isEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

function isFullChar(password) {
  return password.length === 8;
}
