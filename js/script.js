var swiper = new Swiper(".slide-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// navbar side toggle
const navLink = document.querySelector(".nav-link");
// ketika humburger menu di klik
document.querySelector(".humberger-menu").onclick = () => {
  navLink.classList.toggle("active");
};
// klik di luar sidebar untuk menghilangkan menu
const humberger = document.querySelector(".humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navLink.contains(e.target)) {
    navLink.classList.remove("active");
  }
});
