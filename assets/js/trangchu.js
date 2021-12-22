const navAccountImg = $(".nav__account-img");
const navAccount = $(".nav__account");

navAccountImg.onclick = function () {
  navAccount.classList.toggle("active");
};

navNotify.onclick = () => {
  navNotify.classList.toggle("active");
};
