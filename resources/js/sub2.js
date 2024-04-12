

//메인 서브 비주얼

const mainVisualHeight = document.querySelector('.main-visual').offsetHeight;
const visualValue = mainVisualHeight / 2;

gsap.fromTo(".main-visual", {opacity: 0}, {opacity:1, duration: 1, ease: "power4.out", delay: 0.5});
const mainVisual = gsap.timeline();
mainVisual.from(".main-visual", {width: "40vw", x: "50vw"})
          .from(".main-visual", {y: visualValue})
          .from(".main-title-wrap", {y: -visualValue},"<")
          .to(".main-title-wrap", {color: "#fff"},"<");

ScrollTrigger.create({
    animation: mainVisual,
    trigger: ".section01",
    start: "top top",
    stagger: 0.3,
    ease: "power3.in",
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    markers: false
});




$('.more-btn').click(function() {
    $(this).toggleClass('active');
    $('.view-fulltext').toggle();
  });



//   function modalView(){
//     $('.tablinks').click(function(){
//       $('.layer-dimm').addClass('open');
//       $('.board-view').show().addClass('open');
//       $('body').addClass('noScroll');
//     })
//   }
//   modalView();


  
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



// const cont = gsap.utils.toArray('.cont');
// gsap.set(cont,{y: '25%', opacity: 0})
// cont.forEach(cont => {
//   gsap.to(cont,{
//     y: 0,
//     autoAlpha: 1,
//     duration: 0.5,
//     stagger: 0.3,
//     scrollTrigger: {
//       trigger: cont,
//       start: 'top 70%',
//       toggleActions:"restart none none reverse",
//     }
//   })
// });

