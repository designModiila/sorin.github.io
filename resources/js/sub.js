
$(document).ready(function(){

  var swiper = new Swiper(".swiper-group", {
    //   loop: true,
    //   loopAdditionalSlides : 1,
      slidesPerView: 1.7,
      /* swiper-slide에 각각 margin-right를 준다. */
      spaceBetween: 70,
      /* 전체적인 슬라이드의 왼쪽에 20px 공백을 준다. */
      slidesOffsetBefore: 20,
      /* 전체적인 슬라이드의 오른쪽에 20px 공백을 준다. */
      slidesOffsetAfter: 20,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
      grabCursor: true,
      pagination: {
              el: ".swiper-pagination",
              type: "progressbar",
            },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
              // when window width is >= 640px
              300: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                  slidesOffsetBefore: 0,
                  slidesOffsetAfter: 0,
              },
              550: {
                slidesPerView: 1.5,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
                },
              767: {
                slidesPerView: 1.5,
                spaceBetween: 70,
            },
              1550: {
                slidesPerView: 1.7,
            },
          }
      });


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
    }

    function startCounting2() {
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
    }

    function startCounting3() {
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
    }

    const countBox1 = document.querySelector('.count01');
    const countBox2 = document.querySelector('.count02');
    const countBox3 = document.querySelector('.count03');

    startCountingWhenVisible(countBox1, startCounting1);
    startCountingWhenVisible(countBox2, startCounting2);
    startCountingWhenVisible(countBox3, startCounting3);


    $('.more-btn').click(function() {
      $(this).toggleClass('active');
      $('.view-fulltext').toggle();
    });


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
});


// consulting

var swiper = new Swiper("#js-swiper-consulting", {
    loop: true,
    initialSlide: 1,
    slidesPerView: 1.9,
    autoplay: true,
    speed: 800,
    // duration: 1000,
    // spaceBetween: 140,
    roundLengths: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 640px
        300: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 1.8,
            spaceBetween: 50,
        },
        1550: {
            slidesPerView: 1.9,
            // spaceBetween: 50,
        },
    }
  });







  // class Scrooth {
  //   constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
  //     this.element = element;
  //     this.distance = strength;
  //     this.acceleration = acceleration;
  //     this.deceleration = deceleration;
  //     this.running = false;
  
  //     this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
  //     this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
  //     this.scroll = this.scroll.bind(this);
  //   }
  
  //   scrollHandler(e) {
  //     e.preventDefault();
  
  //     if (!this.running) {
  //       this.top = this.element.pageYOffset || this.element.scrollTop || 0;
  //       this.running = true;
  //       this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
  //       this.isDistanceAsc = true;
  //       this.scroll();
  //     } else {
  //       this.isDistanceAsc = false;
  //       this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
  //     }
  //   }
  
  //   scroll() {
  //     if (this.running) {
  //       this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
  //       Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
  //       Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
  
  //       this.top += this.currentDistance;
  //       this.element.scrollTo(0, this.top);
        
  //       requestAnimationFrame(this.scroll);
  //     }
  //   }
  // }
  
  // const scroll = new Scrooth({
  //   element: window,
  //   strength: 25,
  //   acceleration: 1,
  //   deceleration: 0.9,
  // });



let tl = gsap.timeline({delay: 0.7});
tl.to('.text-ani', {duration:0.5, y:0, stagger: 0.3});



const textAni02 = gsap.timeline({delay: 0.7});
textAni02.to('.text-ani-02', {duration:0.5, y:0, stagger: 0.3});
ScrollTrigger.create({
  animation: textAni02,
  trigger: ".consulting .section02",
  start: "top 80%",
  end: "bottom bottom",
  markers: false,
})


const textAni04 = gsap.timeline({delay: 0.7});
textAni04.to('.text-ani-04', {duration:0.5, y:0, stagger: 0.3});
ScrollTrigger.create({
  animation: textAni04,
  trigger: ".section04",
  start: "top 80%",
  toggleActions: "play none none none",
  markers: false,
})

const cardmoving = gsap.timeline({delay: 1});
cardmoving.from(".consulting-item-1", {y: innerHeight + 510})
          .from(".consulting-item-2", {y: innerHeight + 510},"-=0.3")
          .from(".consulting-item-3", {y: innerHeight + 510},"-=0.3")
          

ScrollTrigger.create({
  animation: cardmoving,
  trigger: ".consulting .section04",
  start: "top top",
  end: "+=3000",
  // duration: 300,
  scrub: 1,
  pin: true,
  anticipatePin: 1,
  
});



const textAni05 = gsap.timeline({delay: 0.7});
textAni05.to('.text-ani-05', {duration:0.5, y:0, stagger: 0.3});
ScrollTrigger.create({
  animation: textAni05,
  trigger: ".consulting .section05",
  start: "top 80%",
  end: "bottom bottom",
  markers: false,
})



// infra business

function swiperInit(swiper) {
  const total = swiper.slides.length - swiper.loopedSlides * 2;
  const contentIndex = (swiper.activeIndex - swiper.loopedSlides) % total;

  const content = contentFullsizeEls[contentIndex];
  if (!content) return;

  content.classList.remove("hero__content--hidden");
  content.classList.add("hero__content--top");
  state.topContent = content;
}

// 인프라비즈니스 슬라이드
var swiper1 = new Swiper("#js-swiper-infra", {
  slidesPerView: 4,
  preventInteractionOnTransition: true,
  loopAddBlankSlides: false,
  speed: 1000,
  duration: 1000,
  spaceBetween: 60,
  centeredSlides: true,
  mousewheel:true,
  breakpoints: {
    300: {
        slidesPerView: 3,
        spaceBetween: 60,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 60,
  },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1280: {
        slidesPerView: 4,
        spaceBetween: 60,
    },
},
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },


      

  // effect: "coverflow",
  // grabCursor: true,
  // centeredSlides: true,
  // slidesPerView: 3,
  // coverflowEffect: {
  //   rotate: 20,
  //   stretch: 0,
  //   depth: 350,
  //   modifier: 1,
  //   slideShadows: true
  // },
  // pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true,
  //       },
});

// 하드웨어 제품 슬라이드
const swiper2 = new Swiper('#js-swiper-hardware', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 230,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    // disableOnInteraction: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    300: {
        slidesPerView: 1.5,
        spaceBetween: 80,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 230,
  },
},
});

// tabmenu
location.href = "#tab1";


$('.infra-more-btn').click(function() {
  $(this).toggleClass('active');
  $('.infra-view-fulltext').toggle();
});


