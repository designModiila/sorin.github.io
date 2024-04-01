
document.addEventListener("DOMContentLoaded", function() {
    // JavaScript를 이용하여 이미지 밝기를 분석하고 글자색을 조절
    var mainTitleWrap = document.querySelector(".main-title-wrap");
    var image = new Image();
    image.src = getComputedStyle(mainTitleWrap).backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
  
    image.onload = function() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var brightness = calculateBrightness(imageData); // 이미지 밝기 계산
      var textColor = brightness < 10 ? "#fff" : "#000"; // 이미지 밝기에 따라 글자색 조절
  
      // 조절된 글자색을 적용
      mainTitleWrap.style.color = textColor;
    };
  });
  
  function calculateBrightness(imageData) {
    var sum = 0;
    for (var i = 0; i < imageData.data.length; i += 4) {
      sum += (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
    }
    return sum / (imageData.width * imageData.height);
  }




document.addEventListener("DOMContentLoaded", function() {
    var mainTitleWrap = document.querySelector(".main-title-wrap");
  
    gsap.to(".main-visual", {
      duration: 2,
      y: -485,
      borderRadius: 0,
      margin: 0,
  
      scrollTrigger: {
        trigger: ".section01",
        start: "top top",
        end: "bottom top",
        pin:true,
        scrub: 1,
      
      }
    });
  });


//   gsap.to(".main-visual", {
//     duration: 2,
//     y: -485,
//     borderRadius: 0,
//     margin: 0,

//     scrollTrigger: {
//         trigger: ".section01",
//         start: "top top",
//         end: "bottom top",
//         pin:true,
//         scrub: 1,    
//         markers: true,
//         pinSpacing: 10,
//     }
// });