const swiperTop = new Swiper('.top__swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,
  effect: "fade",
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


document.querySelectorAll('.accordeon__triger').forEach((item) => {
    item.addEventListener('click', () => {
      item.parentNode.classList.toggle('accordeon__item--active')
    })
});
