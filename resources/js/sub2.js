$(document).ready(function() {

        gsap.fromTo(".main-visual", {opacity: 0}, {opacity:1, duration: 1, ease: "power4.out"});
        const mainVisual = gsap.timeline();
        mainVisual.from(".main-visual", {width: "40vw", height: "40vh", x: "50vw", yPercent: -10, ease: "power1.inOut"})
                  .from(".main-visual", {height: "40vh", ease: "power1.inOut"})
                  .to(".main-visual", {height: "100%", ease: "power1.inOut"})
                  .from(".main-title-wrap", {y: "-40vh", ease: "power1.inOut"}, "<")
                  .to(".main-title-wrap", {color: "#fff", ease: "power1.inOut"}, "<")
                  .to(".main-category", {color: "#fff", ease: "power1.inOut"}, "<");

//글자 애니메이션

const targets = gsap.utils.toArray(".splitani");

targets.forEach((target) => {
    let SplitClient = new SplitType(target, { type: "lines, words, chars" });
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;

    gsap.from(lines, {
        delay: 0.7,
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
        ScrollTrigger.create({
            animation: mainVisual,
            trigger: ".section01",
            start: "top top",
            scrub: 2,
            pin: true,
            anticipatePin: 1,
            markers: false
        });


        const isMobile = window.innerWidth < 768;

        if (!isMobile) {

            const details = document.querySelectorAll('.detail');
            details.forEach((detail, index) => {
                ScrollTrigger.create({
                    trigger: detail,
                    id: index + 1,
                    start: 'top 70%',
                    end: () => `+=${detail.clientHeight + 100}`,
                    toggleActions: 'play reverse none reverse',
                    toggleClass: {targets: detail, className: "is-active"},
                    ease: "power1.inOut",
                    markers: false
                });
            });
        
            // Photos section animation
            const photos = gsap.timeline({
                scrollTrigger: {
                    trigger: ".photos",
                    start: "top 50%",
                    pin: true,
                    scrub: 1,
                    ease: "power1.inOut",
                    end: "+=870 10%",
                    markers: false,
                    toggleActions: "play reverse none reverse"
                }
            });
        
            const mission = gsap.timeline();
            mission.to(".photo2", {opacity: 1, delay: 1.5})
                   .to(".photo3", {opacity: 1, delay: 0.3});
        
            ScrollTrigger.create({
                animation: mission,
                trigger: ".photos",
                start: "top 70%",
                end: "+=760 top",
                scrub: 1,
                anticipatePin: 1,
                pinSpace: 0,
                markers: true
            });
        }
    

    // General content animations
    const cont = gsap.utils.toArray('.cont');
    gsap.set(cont, {y: '25%', opacity: 0});
    cont.forEach(contItem => {
        gsap.to(contItem, {
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

    // Additional sections - Example with sub01
    const containerElement = document.querySelector('.sub01 .section04 .section-container');
    if (containerElement) {
        const containerHeight = containerElement.offsetHeight;
        const sub01con = gsap.timeline();
        sub01con.from(".sub01 .section-container", {width: "40vw", height: "30vh", y: "-10vh", delay: 1, ease: "power1.in", scrub: 2})
                .to(".subimg1", {opacity: 0, delay: 2.5})
                .to(".subimg2", {opacity: 0, duration: 1, delay: .5})
                .to(".subimg3", {opacity: 0, duration: 1, delay: .5})
                .to(".subimg4", {opacity: 0, duration: 1, delay: .5});

        ScrollTrigger.create({
            animation: sub01con,
            trigger: ".sub01 .section04",
            start: "top top",
            end: "+=270%",
            scrub: 2,
            ease: "power1.in",
            pin: true,
            anticipatePin: 1,
            markers: false
        });

        const contentWrap = gsap.utils.toArray('.sub01 .section04 .content-wrap');
        contentWrap.forEach((content, index) => {
            gsap.set(content, { y: containerHeight * (index + 1) });
        });

        ScrollTrigger.create({
            trigger: ".sub01 .section04",
            start: "top top",
            end: "+=300%",
            scrub: true,
            markers: false,
            onUpdate: self => {
                const progress = self.progress;
                contentWrap.forEach((content, index) => {
                    const yPos = -containerHeight * 2 * progress + containerHeight * (index + 1);
                    gsap.to(content, { y: yPos * 2, duration: 1 });
                });
            }
        });
    }


    // 탭컨텐츠 관련
    if ($(".content.sub07").length > 0) {
        $(".sub07 .tabcontent").hide();
        $(".sub07 ul.tabs li:first").addClass("active").show();
        $(".sub07 .tabcontent:first").css('display', 'grid').show();

        $(".sub07 ul.tabs li").click(function() {
            $(".sub07 ul.tabs li").removeClass("active");
            $(this).addClass("active");
            $(".sub07 .tabcontent").hide();

            var activeTab = $(this).find("a").attr("href");
            $(activeTab).css('display', 'grid').hide().fadeIn();
            return false;
        });
    } else {
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


    if ($('.content').hasClass('sub04')) {

        $(".sub04 ul.tabs li:first").removeClass("active").show();
        
        // Hover effect to add/remove .hover class on corresponding .article elements
        $(".sub04 .tablinks a").hover(
            function() {
                // On mouse enter, add .hover class
                var dataRel = $(this).data('rel');
                $('.article.' + dataRel).addClass('hover');
            }, 
            function() {
                // On mouse leave, remove .hover class
                var dataRel = $(this).data('rel');
                $('.article.' + dataRel).removeClass('hover');
            }
        );

        $(".sub04 .article").hover(
            function() {
                var dataRel = $(this).data('rel');
                $(".sub04 .tablinks a[data-rel='" + dataRel + "']").parent().addClass('hover');
                $(".sub04 .article[data-rel='" + dataRel + "']").addClass('hover');
            }, 
            function() {
                var dataRel = $(this).data('rel');
                $(".sub04 .tablinks a[data-rel='" + dataRel + "']").parent().removeClass('hover');
                $(".sub04 .article[data-rel='" + dataRel + "']").removeClass('hover');
            }
        );

        $(".sub04 .tablinks a, .sub04 .article").click(function() {
            var no = $(this).attr("layer");
            var dataRel = $(this).data('rel');
            layer_open(no);
            
            $('.article').removeClass('active');
            $('.tablinks').removeClass('active');
            $('.' + dataRel).addClass('active');
            $('.tablinks a[data-rel="' + dataRel + '"]').parent().addClass('active');

            return false;  // Prevent default action
        });

        $(".close-btn").click(function() {
            layer_close();
        });

    
    }

});

// Layer opening function
function layer_open(no) {
    $(".world-layer").removeClass("open");
    $(".world-layer[layer=" + no + "]").addClass("open");
    $(".layer-dimm").addClass("open");
    $('body').addClass('noScroll');
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




//복리후생

function openBenefit(evt, benefit) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(benefit).style.display = "grid";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// Layer closing function
function layer_close() {
    $(".world-layer, .layer-dimm").removeClass("open");
    $('body').removeClass('noScroll');
};
