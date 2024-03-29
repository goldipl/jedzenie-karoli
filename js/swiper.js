/* MIT License */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 25
      }
    }
});