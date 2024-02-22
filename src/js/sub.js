var swiper = new Swiper(".swiper-group", {
  //loop: true,
  slidesPerView: 1.25,
  grabCursor: true,
  pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  });



// var swiper = new Swiper(".mySwiper", {
//    //loop: true,
//     slidesPerView: 1.2,
//   //   grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//       type: "progressbar",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });




// const swiperTestmonials = new Swiper('.swiper-testmonials', {
//   loop: true,
//   slidesPerView: 1.2,
//   grabCursor: true,
//   // Navigation arrows
//   navigation: {
//       nextEl: '.swiper-button-testmonials-next',
//       prevEl: '.swiper-button-testmonials-prev',
//   },
//   breakpoints: {
//       // when window width is >= 640px
//       500: {
//           slidesPerView: 1.4,
//       },
//       780: {
//           slidesPerView: 1.8,
//       },
//       1300: {
//           slidesPerView: 2.6,
//       },
//       1630: {
//           slidesPerView: 3.2,
//       }
//   }

// });





let countBox1 = document.querySelector('.count01');
let count1 = 0;
let num1 = 85;

let counting1 = setInterval(function () {
    if (count1 >= num1) {
        count1 = num1;
        clearInterval(counting1);
    } else {
        count1 += 1;
    }
    countBox1.innerHTML = new Intl.NumberFormat().format(count1);
}, 10);


let countBox2 = document.querySelector('.count02');
let count2 = 0;
let num2 = 97;

let counting2 = setInterval(function () {
    if (count2 >= num2) {
        count2 = num2;
        clearInterval(counting2);
    } else {
        count2 += 1;
    }
    countBox2.innerHTML = new Intl.NumberFormat().format(count2);
}, 10);


let countBox3 = document.querySelector('.count03');
let count3 = 0;
let num3 = 7000;

let counting3 = setInterval(function () {
    if (count3 >= num3) {
        count3 = num3;
        clearInterval(counting3);
    } else {
        count3 += 53;
    }
    countBox3.innerHTML = new Intl.NumberFormat().format(count3);
}, 10);


AOS.init();
setTimeout(function () {
    AOS.init({
    once: true,
    mirror: false,
    delay: 200,
    duration: 1000,
    easing: 'ease-in-out',
  });
  }, 1000);