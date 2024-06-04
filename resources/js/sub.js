
$(document).ready(function() {
  initializeTabs();
  initializeSwipers();
  initializeCounterAnimations();
  initializeMoreButtonToggles();
  initializeAOS();
  initializeGSAPAnimations();
  initializeTextAnimations();
  initializeCardAnimations();
});

function initializeTabs() {
  $(".tabcontent").hide();
  $("ul.tabs li:first").addClass("active").show();
  $(".tabcontent:first").show();

  $("ul.tabs li").click(function() {
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");
      $(".tabcontent").hide();
      var activeTab = $(this).find("a").attr("href");
      $(activeTab).fadeIn();
      return false;
  });
}

const mainsection01Elements = document.querySelector(".sub-consulting .section01, .sub-infrabusiness .section01, .sub-servicenow .section01");
mainsection01Elements.forEach(mainsection01 => {
    gsap.to(mainsection01, {
        duration: 1,
        ease: "none",
        scrollTrigger: {
            trigger: mainsection01,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
        }
    });
});



function initializeSwipers() {
 
  new Swiper(".swiper-group", {
      slidesPerView: 1.7,
      spaceBetween: 70,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
      autoplay: { delay: 3500, disableOnInteraction: false },
      loop: true,
      grabCursor: true,
      pagination: { el: ".swiper-pagination", type: "progressbar" },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: {
          300: { slidesPerView: 1, spaceBetween: 50 },
          550: { slidesPerView: 1.5, slidesOffsetBefore: 20, slidesOffsetAfter: 20 },
          767: { slidesPerView: 1.5, spaceBetween: 70 },
          1550: { slidesPerView: 1.7 }
      }
  });


  new Swiper("#js-swiper-consulting", {
      loop: true,
      initialSlide: 1,
      slidesPerView: 1.9,
      speed: 800,
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
          300: { slidesPerView: 1.3, spaceBetween: 10 },
          600: { slidesPerView: 1.8, spaceBetween: 50 },
          1550: { slidesPerView: 1.9 }
      }
  });


  new Swiper("#js-swiper-portfolio", {
    loop: true,
    initialSlide: 1,
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 20,
    roundLengths: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});
  
new Swiper("#js-swiper-infra", {
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    mousewheel: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 3,
        slideShadows: false
      },
    on: {
      slideChangeTransitionStart: function () {
        var slides = this.slides;
        slides.forEach(function(slide, index) {
          if (index < this.activeIndex) {
            slide.style.opacity = '0'; // 왼쪽으로 이동할 때 이전 슬라이드들은 opacity를 0으로 설정
          } else if (index === this.activeIndex) {
            slide.style.opacity = '1'; // 활성화된 슬라이드는 opacity를 1로 설정
          } else {
            slide.style.opacity = '1'; // 활성화되지 않은 슬라이드들은 opacity를 1로 설정
          }
        }, this);
      }
    }
  });


  new Swiper('#js-swiper-hardware', {
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


// 로고 받으면 슬라이드 활성
//   new Swiper(".backup-slide", {
//     slidesPerView: 1,
//     spaceBetween: 80,
//     loop: true,
//     speed: 1000,
//     autoplay: {
//         delay: 3500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     breakpoints: {
//         768: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//         },
//     },
//   });
  

}

function initializeCounterAnimations() {
    
    function startCountingWhenVisible(element, targetNumber, duration) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let count = 0;
                    const intervalTime = 10; // milliseconds
                    const totalIntervals = duration / intervalTime;
                    const increment = Math.ceil(targetNumber / totalIntervals);
                    
                    let counting = setInterval(function () {
                        count += increment;
                        if (count >= targetNumber) {
                            count = targetNumber;
                            clearInterval(counting);
                        }
                        element.innerHTML = new Intl.NumberFormat().format(count);
                    }, intervalTime);
                    
                    observer.unobserve(entry.target);
                }
            });
        });
    
        observer.observe(element);
    }
    
    const duration = 2000; // duration in milliseconds for counting
    const countBox1 = document.querySelector('.count01');
    const countBox2 = document.querySelector('.count02');
    const countBox3 = document.querySelector('.count03');
    
    if (countBox1 && countBox2 && countBox3) {
        startCountingWhenVisible(countBox1, 85, duration);
        startCountingWhenVisible(countBox2, 97, duration);
        startCountingWhenVisible(countBox3, 7000, duration);
    } else {
        //console.error('One of the counting boxes is not found in the DOM');
    }


}

function initializeMoreButtonToggles() {
  
  $('.more-btn, .infra-more-btn').click(function() {
    $(this).toggleClass('active');
    $('.view-fulltext').toggle();
  });

  
}

function initializeAOS() {
  setTimeout(() => {
      AOS.init({
          once: true,
          mirror: false,
          delay: 200,
          duration: 1000,
          easing: 'ease-in-out',
      });
  }, 1000);
}


function initializeGSAPAnimations() {
  const cont = gsap.utils.toArray('.cont');
  gsap.set(cont, { y: '25%', opacity: 0 });
  cont.forEach(contItem => {
      gsap.to(contItem, {
          delay: 0.5,
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.3,
          scrollTrigger: {
              trigger: contItem,
              start: 'top 70%',
              toggleActions: "restart none none reverse",
          }
      });
  });
}

function initializeTextAnimations() {
  const targets = gsap.utils.toArray(".splitani");

  targets.forEach((target) => {
      let SplitClient = new SplitType(target, { type: "lines, words, chars" });
      let lines = SplitClient.lines;
      let words = SplitClient.words;
      let chars = SplitClient.chars;

      gsap.from(lines, {
          delay: 0,
          yPercent: 100,
          opacity: 0,
          duration: 0.5,
          ease: "circ.out",
          stagger: 0.3,
          scrollTrigger: {
              trigger: target,
              start: "top 80%",
              end: "bottom bottom",
              markers: false,
          }
      });
  });
}



    function initializeCardAnimations() {
        const cardmoving = gsap.timeline({ delay: 1 });
      
        cardmoving.from(".consulting-item-1", { y: window.outerHeight + 510 })
                  .from(".consulting-item-2", { y: window.outerHeight + 510 }, "-=0.3")
                  .from(".consulting-item-3", { y: window.outerHeight + 510 }, "-=0.3");
      
        ScrollTrigger.create({
            animation: cardmoving,
            trigger: ".consulting .section04",
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
            anticipatePin: 1
        });
      }


