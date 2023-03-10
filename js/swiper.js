//Initialize Swiper -->
let swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      424: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      680: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      920: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1240: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    } 
  });