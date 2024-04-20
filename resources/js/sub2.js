$(document).ready(function() {

        gsap.fromTo(".main-visual", {opacity: 0}, {opacity:1, duration: 1, ease: "power4.out"});
        const mainVisual = gsap.timeline();
        mainVisual.from(".main-visual", {width: "40vw", height: "40vh", x: "50vw", yPercent: -10, ease: "power1.inOut"})
                  .from(".main-visual", {height: "40vh", ease: "power1.inOut"})
                  .to(".main-visual", {height: "100%", ease: "power1.inOut"})
                  .from(".main-title-wrap", {y: "-40vh", ease: "power1.inOut"}, "<")
                  .to(".main-title-wrap", {color: "#fff", ease: "power1.inOut"}, "<")
                  .to(".main-category", {color: "#fff", ease: "power1.inOut"}, "<");

        ScrollTrigger.create({
            animation: mainVisual,
            trigger: ".section01",
            start: "top top",
            scrub: 2,
            pin: true,
            anticipatePin: 1,
            markers: false
        });

        // Detailed element animations
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

        // Photos section animation
        const photos = gsap.timeline({
            scrollTrigger: {
                trigger: ".photos",
                start: "top 50%",
                pin: true,
                scrub: 1,
                ease: "power1.inOut",
                end: "+=570 20%",
                markers: false,
                toggleActions: "play reverse none reverse"
            }
        });

        const mission = gsap.timeline();
        mission.to(".photo2", {opacity: 1, delay: .5})
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

// Layer closing function
function layer_close() {
    $(".world-layer, .layer-dimm").removeClass("open");
    $('body').removeClass('noScroll');
};