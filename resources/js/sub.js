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





    // let countBox1 = document.querySelector('.count01');
    // let count1 = 0;
    // let num1 = 85;

    // let counting1 = setInterval(function () {
    //     if (count1 >= num1) {
    //         count1 = num1;
    //         clearInterval(counting1);
    //     } else {
    //         count1 += 1;
    //     }
    //     countBox1.innerHTML = new Intl.NumberFormat().format(count1);
    // }, 10);


    // let countBox2 = document.querySelector('.count02');
    // let count2 = 0;
    // let num2 = 97;

    // let counting2 = setInterval(function () {
    //     if (count2 >= num2) {
    //         count2 = num2;
    //         clearInterval(counting2);
    //     } else {
    //         count2 += 1;
    //     }
    //     countBox2.innerHTML = new Intl.NumberFormat().format(count2);
    // }, 10);


    // let countBox3 = document.querySelector('.count03');
    // let count3 = 0;
    // let num3 = 7000;

    // let counting3 = setInterval(function () {
    //     if (count3 >= num3) {
    //         count3 = num3;
    //         clearInterval(counting3);
    //     } else {
    //         count3 += 53;
    //     }
    //     countBox3.innerHTML = new Intl.NumberFormat().format(count3);
    // }, 10);




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