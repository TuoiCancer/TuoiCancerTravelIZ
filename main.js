const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navItems = $$(".nav__item");
const navSlider = $(".nav__slider");
const navNotify = document.getElementById("nav__notify");

navItems.forEach((item) => {
  item.onclick = () => {
    $(".nav__item.active").classList.remove("active");
    item.classList.add("active");
  };
});

window.addEventListener("scroll", () => {
  const x = window.pageYOffset;
  if (x > 80) navSlider.classList.add("active");
  else navSlider.classList.remove("active");
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.header__content, .book__wrap-img, .review__form `, {
  origin: "left",
  interval: 100,
});
sr.reveal(`.header__wrap, .book__content , .review__account`, {
  delay: 500,
  origin: "right",
});
sr.reveal(`.header__search, .header__list, .package__list`, { delay: 500 });
sr.reveal(` .package__list`, { delay: 700 });
sr.reveal(`.brand-container`);
