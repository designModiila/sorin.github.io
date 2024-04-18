
$(document).ready(function(){


//메인 서브 비주얼

const mainVisualHeight = document.querySelector('.main-visual').offsetHeight;
const visualValue = mainVisualHeight / 2;

if (window.matchMedia("(min-width: 768px)").matches) {
    gsap.fromTo(".main-visual", {opacity: 0}, {opacity:1, duration: 1, ease: "power4.out"});
    const mainVisual = gsap.timeline();
    mainVisual.from(".main-visual", {width: "40vw", height: "40vh", x: "50vw" ,yPercent: -10, ease: "power1.inOut"})
              .from(".main-visual", {height: "40vh", ease: "power1.inOut"})
              .to(".main-visual", {height: "100%", ease: "power1.inOut"})
              .from(".main-title-wrap", {y: "-40vh", ease: "power1.inOut"},"<")
              .to(".main-title-wrap", {color: "#fff", ease: "power1.inOut"},"<")
              .to(".main-category", {color: "#fff", ease: "power1.inOut"},"<");

    ScrollTrigger.create({
        animation: mainVisual,
        trigger: ".section01",
        start: "top top",
        stagger: 0,
        ease: "power1.in",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        markers: false
    });
}; //else {
//   const mainVisual = gsap.timeline(); // 새로운 mainVisual 정의
//     mainVisual.from(".main-visual", {height: "30vh", ease: "power1.inOut"})
//               .to(".main-visual", {height: "100%", ease: "power1.inOut"})
//               .from(".main-title-wrap", {y: "-10vh", ease: "power1.inOut"},"<")
//               .to(".main-title-wrap", {color: "#fff", ease: "power1.inOut"},"<");
//     ScrollTrigger.create({
//       animation: mainVisual,
//       trigger: ".section01",
//       start: "top top",
//       stagger: 0,
//       ease: "power1.in",
//       scrub: 2,
//       pin: true,
//       anticipatePin: 1,
//       markers: false
//   });
// }



const cont = gsap.utils.toArray('.cont');
gsap.set(cont,{y: '25%', opacity: 0})
cont.forEach(cont => {
  gsap.to(cont,{
    y: 0,
    autoAlpha: 1,
    duration: 0.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: cont,
      start: 'top 70%',
      toggleActions:"restart none none reverse",
    }
  })
});


});

$(document).ready(function(){

//개요
const containerHeight = document.querySelector('.section-container').offsetHeight;

const sub01con = gsap.timeline();
sub01con.from(".section-container", {width: "40vw", height: "30vh", y: "-10vh", delay: 1,ease: "power1.in", scrub: 2})
        .to(".subimg1", {opacity: 0, delay: 2.5})
        .to(".subimg2", {opacity: 0, duration:1, delay: .5})
        .to(".subimg3", {opacity: 0, duration:1, delay: .5})
        .to(".subimg4", {opacity: 0, duration:1, delay: .5})
        // .from(desc, {opacity: 0, y: containerHeight})
        // .to(desc, {y: -containerHeight *2});

ScrollTrigger.create({
    animation: sub01con,
    trigger: ".section04",
    start: "top top",
    // ease: "power3.in",
    end: "+=270%",
    scrub: 2,
    ease: "power1.in",
    pin: true,
    anticipatePin: 1,
    markers: false
});




const contentWrap = gsap.utils.toArray('.section04 .content-wrap');

contentWrap.forEach((content, index) => {
  gsap.set(content, { y: containerHeight * (index + 1) }); // 각 요소의 초기 y 위치 설정
});

ScrollTrigger.create({
  trigger: ".section04",
  start: "top top", // 요소의 초기 위치를 시작 지점으로 설정
  end: "+=300%", // 스크롤되는 범위
  scrub: true, // 스크롤에 따라 부드럽게 이동하도록 설정
  markers: false,
  onUpdate: self => {
    const progress = self.progress;
    contentWrap.forEach((content, index) => {
      const yPos = -containerHeight * 2 * progress + containerHeight * (index + 1);
      gsap.to(content, { y: yPos *2, duration: 1 });
    });
  }
});  
});

$(document).ready(function(){


// vision

if (window.innerWidth >= 768) {
  const details = document.querySelectorAll('.detail');
  details.forEach((detail, index) => {
    ScrollTrigger.create({
      trigger: detail,
      id: index + 1,
      start: 'top 55%',
      end: () => `+=${detail.clientHeight + 100}`,
      toggleActions: 'play reverse none reverse',
      toggleClass: {targets: detail, className: "is-active"},
      ease: "power1.inOut",
      markers: false
    });
  });

  const photos = gsap.timeline({
    scrollTrigger: {
      trigger: ".photos",
      start : "top 50%",
      pin: true,
      scrub: 1,
      ease: "power1.inOut",
      end : "+=570 20%",
      markers: false, //{startColor: "red", endColor: "blue", fontSize: "20px"},
      toggleActions : "play reverse none reverse"
    }
  });

  const mission = gsap.timeline();
  mission.to(".photo2", {opacity: 1, delay:.5})
         .to(".photo3", {opacity: 1});

  ScrollTrigger.create({
      animation: mission,
      trigger: ".photos",
      start: "top 50%",
      end: "+=450 20%",
      scrub: 1,
      anticipatePin: 1,
      pinSpace: 0,
      markers: false
  });
}



// sub06 인재상
const section02 = document.querySelector(".section02");
const cards = document.querySelectorAll(".content-card");
const cardHeight = document.querySelector('.content-card').offsetHeight;

// section02를 고정
ScrollTrigger.create({
  trigger: section02,
  start: "top top",
  endTrigger: cards[cards.length - 1],
  end: "bottom top",
  pin: section02,
  pinSpacing: true
});

// 각 카드의 y값 설정
gsap.set(cards[0], { y: 0 });
gsap.set(cards[1], { y: cardHeight });
gsap.set(cards[2], { y: cardHeight });


const targets = gsap.utils.toArray(".split");

targets.forEach((target) => {
  let SplitClient = new SplitType(target, { type: "chars" });
  let chars = SplitClient.chars;

  chars.forEach((char, index) => {
    ScrollTrigger.create({
      trigger: target,
      start: "top ",
      end: "+=400",
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress;
        const color = progress < (index + 1) / chars.length ? "#ffffff" : "#329BFA"; // 해당 글자의 위치에 따라 색상 결정
        gsap.to(char, { color: color, duration: 0.5 }); // 색상 전환 속도를 조정합니다.
      }
    });
  });
});







});

$('.more-btn').click(function() {
  $(this).toggleClass('active');
  $('.view-fulltext').toggle();
});



//계열사
function layer_open(no){
  $(".world-layer[layer="+no+"]").addClass("open");
  $(".layer-dimm").addClass("open");
  $('body').addClass('noScroll');
  $('.modal_background').addClass('active');

};

function layer_close(){
  $(".world-layer, .layer-dimm").removeClass("open");
  $('body').removeClass('noScroll');
  $('.modal_background').removeClass('active');
};

$(".sub04 .btn_layer,.sub04 .article").click(function () {
  var no = $(this).attr("layer");
  layer_open(no);
  $('.article').removeClass('active');
  $('.' + $(this).data('rel')).addClass('active');
});

$(".close-btn").click(function () {
  layer_close();
});
$(".modal_background").click(function () {
  layer_close();
});




//사업장

function openLocation(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

