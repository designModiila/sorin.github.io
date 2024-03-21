  
  
// const show = "show";
// const on = 'on';
// const firstSlide = document.querySelector(".slide-wrapper> :nth-child(1)");
// const firstpagination = document.querySelector('.indicator ul li:first-child');

// function slide() {
//   const currentSlide = document.querySelector(`.${show}`);
//   const currentpgaination = document.querySelector(`.indicator ul li.${on}`);
//   if (currentSlide || currentpgaination) {
//     currentSlide.classList.remove(show);
//     currentpgaination.classList.remove(on);
//     const nextSlide = currentSlide.nextElementSibling;
//     const nextpagination = currentpgaination.nextElementSibling;
//     if (nextSlide || nextpagination) {
//       nextSlide.classList.add(show);
//       nextpagination.classList.add(on);
//     } else {
//       firstpagination.classList.add(on);
//       firstSlide.classList.add(show);
//     }
//   } else {
//     firstpagination.classList.add(on);
//     firstSlide.classList.add(show);
//   }
// }
// setInterval(slide, 6000);

// const li = document.querySelectorAll('.indicator ul li');

// let main_img = document.querySelectorAll('.slide');

// li.forEach((item, i) => {
//   item.addEventListener('click', (e) => {
//     let event = e.currentTarget;
//     for (let k = 0; k < main_img.length; k++) {
//       main_img[k].classList.remove('show');
//     }
//     main_img[i].classList.add('show');
//     for (let i = 0; i < li.length; i++) {
//       li[i].classList.remove('on');
//     }
//     event.classList.add('on');
//   })
// })
  

