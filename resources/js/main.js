  
  
const show = "show";
const on = 'on';
const firstSlide = document.querySelector(".slide-wrapper> :nth-child(1)");
const firstpagination = document.querySelector('.indicator ul li:first-child');

function slide() {
  const currentSlide = document.querySelector(`.${show}`);
  const currentpgaination = document.querySelector(`.indicator ul li.${on}`);
  if (currentSlide || currentpgaination) {
    currentSlide.classList.remove(show);
    currentpgaination.classList.remove(on);
    const nextSlide = currentSlide.nextElementSibling;
    const nextpagination = currentpgaination.nextElementSibling;
    if (nextSlide || nextpagination) {
      nextSlide.classList.add(show);
      nextpagination.classList.add(on);
    } else {
      firstpagination.classList.add(on);
      firstSlide.classList.add(show);
    }
  } else {
    firstpagination.classList.add(on);
    firstSlide.classList.add(show);
  }
}
setInterval(slide, 6000);

const li = document.querySelectorAll('.indicator ul li');

let main_img = document.querySelectorAll('.slide');

li.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    let event = e.currentTarget;
    for (let k = 0; k < main_img.length; k++) {
      main_img[k].classList.remove('show');
    }
    main_img[i].classList.add('show');
    for (let i = 0; i < li.length; i++) {
      li[i].classList.remove('on');
    }
    event.classList.add('on');
  })
})
  

const textAni = gsap.timeline({delay: 0.7});
textAni.to('.text-ani', {duration:0.5, y:0, stagger: 0.3});
ScrollTrigger.create({
  animation: textAni,
  trigger: ".section-count",
  start: "top 80%",
  end: "bottom bottom",
  markers: false,
})


// setTimeout(function(){
//   const odometer = document.querySelectorAll(".odometer");
//   odometer[0].innerHTML = 30;
//   odometer[1].innerHTML = 100;
//   odometer[2].innerHTML = 2000;
// }, 3000);


// // 고차함수 한번만 실행
// var _once = function(func) {
// var flag, result;
// return function(){
//   if(flag) { return result};
//   flag = true;
//   return result = func.apply(this. argument);
// }
// }


// document.addEventListener("DOMContentLoaded", function() {

//   let observer;
//   const odometerElements = document.querySelectorAll(".odometer");

//   const observerOptions = {
//       root: null, // 뷰포트를 기준으로
//       threshold: 0.1, // 대상 요소의 10%가 보일 때 콜백 실행
//   };

//   const observerCallback = (entries, observer) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               // 요소가 화면에 보일 때 실행될 로직
//               // 예시로, odometer 값 설정
//               const target = entry.target;
//               const value = target.getAttribute('data-odometer-value');
//               target.innerHTML = value;

//               // 한 번 실행된 후, observer를 멈춤
//               observer.unobserve(target);
//           }
//       });
//   };

//   if ('IntersectionObserver' in window) {
//       observer = new IntersectionObserver(observerCallback, observerOptions);
//       odometerElements.forEach(el => {
//           observer.observe(el); // 각 odometer 요소 관찰 시작
//       });
//   } else {
//       // IntersectionObserver를 지원하지 않는 브라우저 대비 대체 로직
//       odometerElements.forEach(el => {
//           const value = el.getAttribute('data-odometer-value');
//           el.innerHTML = value;
//       });
//   }
// });





function startCountingWhenVisible(element, countingFunction) {
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              countingFunction();
              observer.unobserve(entry.target);
          }
      });
  });

  observer.observe(element);
}

function startCounting1() {
  let count1 = 0;
  let num1 = 30;

  let counting1 = setInterval(function () {
      if (count1 >= num1) {
          count1 = num1;
          clearInterval(counting1);
      } else {
          count1 += 1;
      }
      countBox1.innerHTML = new Intl.NumberFormat().format(count1);
  }, 25);
}

function startCounting2() {
  let count2 = 0;
  let num2 = 100;

  let counting2 = setInterval(function () {
      if (count2 >= num2) {
          count2 = num2;
          clearInterval(counting2);
      } else {
          count2 += 1;
      }
      countBox2.innerHTML = new Intl.NumberFormat().format(count2);
  }, 10);
}

function startCounting3() {
  let count3 = 0;
  let num3 = 2000;

  let counting3 = setInterval(function () {
      if (count3 >= num3) {
          count3 = num3;
          clearInterval(counting3);
      } else {
          count3 += 28;
      }
      countBox3.innerHTML = new Intl.NumberFormat().format(count3);
  }, 10);
}




const countBox1 = document.querySelector('.count01');
const countBox2 = document.querySelector('.count02');
const countBox3 = document.querySelector('.count03');

startCountingWhenVisible(countBox1, startCounting1);
startCountingWhenVisible(countBox2, startCounting2);
startCountingWhenVisible(countBox3, startCounting3);


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



// const businessItem = gsap.timeline();
// businessItem
//   .from(".business-item-01", { scale: 0.3, y: -200 })
//   .to(".business-item-01 .item-text-wrap", { opacity: 1 })
//   .to(".business-item-01 .item-icon-wrap", { opacity: 1 });

// // businessItem을 사용하여 ScrollTrigger를 생성

// ScrollTrigger.create({
//   animation: businessItem,
//   trigger: ".business-item-wrap",
//   start: "top top",
//   end: "+=2000",
//   scrub: 1,
//   pin: true,
//   anticipatePin: 1,
//   onComplete: () => {
//     gsap.utils.toArray(".business-item").forEach((panel, i) => {
//       ScrollTrigger.create({
//         trigger: panel,
//         start: "top top",
//         pin: true,
//         pinSpacing: false,
//         });
//       });
//   },
// });



// businessItem 타임라인 생성
// const businessItem = gsap.timeline();
// businessItem
//   .from(".business-item-01", { scale: 0.3, y: -200 })
//   .to(".business-item-01 .item-text-wrap", { opacity: 1 })
//   .to(".business-item-01 .item-icon-wrap", { opacity: 1 });

// // businessItem을 사용하여 ScrollTrigger를 생성
// ScrollTrigger.create({
//   animation: businessItem,
//   trigger: ".business-item-01-wrap",
//   start: "top top",
//   end: "+=1000",
//   scrub: 1,
//   pin: true,
//   anticipatePin: 1,
// });

// // businessItem 타임라인이 완료된 후 각 .business-item 요소에 대한 ScrollTrigger 생성
// businessItem.eventCallback("onComplete", () => {
//   gsap.utils.toArray(".business-item").forEach((panel, i) => {
//     ScrollTrigger.create({
//       trigger: panel,
//       start: "top top",
//       pin: true,
//       pinSpacing: false,
//       markers: true
//     });
//   });
// });


const businessItem = gsap.timeline();
businessItem.from(".business-item-01", { scale: 0.3, y:-200})
  .to(".business-item-01 .item-text-wrap", { opacity: 1 })
  .to(".business-item-01 .item-icon-wrap", { opacity: 1 })
  // .to(".business-item-02", {y: "-100vh"})
  // .to(".business-item-03", {y: "-200vh"});

 

ScrollTrigger.create({
  animation: businessItem,
  trigger: ".business-item-01-wrap",
  start: "top top",
  // end: "bottom bottom",
  end: "+=2000",
  // scrub: true,
  pin: true,
  anticipatePin: 1,
  toggleActions: "play none none none",
  // markers: true
});


// businessItem.eventCallback("onComplete", () => {
//   const panel1 = document.querySelector(".business-item-01")
//     ScrollTrigger.create({
//       yPercent: -100,
//       trigger: ".business-item-02",
//       start: "top top",
//       pin: ".business-item-01-wrap",
//       // pinSpacing: false,
//       markers: true
//     });
// });

// businessItem.eventCallback("onComplete", () => {
//   const panel1 = document.querySelector(".business-item-01")
//     ScrollTrigger.create({
//       trigger: panel1,
//       start: "top top",
//       pin: ".business-item-01-wrap",
//       // pinSpacing: false,
//       markers: true
//     });
// });

