var swiper = new Swiper(".upgrades__slider", {
  slidesPerView: 2,
  spaceBetween: 7,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 8,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper3 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper2,
  },
});
