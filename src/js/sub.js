var swiper = new Swiper(".mySwiper", {
   //loop: true,
    slidesPerView: 1.2,
  //   grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//   const swiperTestmonials = new Swiper('.mySwiper', {
//     loop: true,
//     slidesPerView: 1.2,
//     grabCursor: true,
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//         // when window width is >= 640px
//         500: {
//             slidesPerView: 1.4,
//         },
//         780: {
//             slidesPerView: 1.8,
//         },
//         1300: {
//             slidesPerView: 2.6,
//         },
//         1630: {
//             slidesPerView: 3.2,
//         }
//     }

// });