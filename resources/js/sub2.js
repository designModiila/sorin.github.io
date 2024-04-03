
// document.addEventListener("DOMContentLoaded", function() {

//     var mainTitleWrap = document.querySelector(".main-title-wrap");
//     var image = new Image();
//     image.src = getComputedStyle(mainTitleWrap).backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
  
//     image.onload = function() {
//       var canvas = document.createElement('canvas');
//       var ctx = canvas.getContext('2d');
//       ctx.drawImage(image, 0, 0);
//       var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//       var brightness = calculateBrightness(imageData); // 이미지 밝기 계산
//       var textColor = brightness < 10 ? "#fff" : "#000"; // 이미지 밝기에 따라 글자색 조절
  
//       mainTitleWrap.style.color = textColor;
//     };
//   });
  
//   function calculateBrightness(imageData) {
//     var sum = 0;
//     for (var i = 0; i < imageData.data.length; i += 4) {
//       sum += (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
//     }
//     return sum / (imageData.width * imageData.height);
//   }




// document.addEventListener("DOMContentLoaded", function() {
//     var mainTitleWrap = document.querySelector(".main-title-wrap");
  
//     gsap.to(".main-visual", {
//       duration: 2,
//       y: -485,
//       borderRadius: 0,
//       margin: 0,
  
//       scrollTrigger: {
//         trigger: ".section01",
//         start: "top top",
//         end: "bottom top",
//         pin:true,
//         scrub: 1,
      
//       }
//     });
//   });

// let tl = gsap.timeline({delay: 0.7});
// tl.to('.text-ani', {duration:0.5, y:0, stagger: 0.3});


// ScrollTrigger.create ({
//   trigger:".mission-wrap",
//   start:"top top",
//   end:"bottom bottom",
//   pin:".mission-right",
//   scrub:2,
//   // markers:true,
// })


$('.more-btn').click(function() {
    $(this).toggleClass('active');
    $('.view-fulltext').toggle();
  });