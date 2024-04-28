$(document).ready(function() {
    if (window.innerWidth >= 768) {
        const mainVisual = gsap.timeline({
            scrollTrigger: {
                trigger: ".section01",
                start: "top top",
                scrub: 2,
                pin: true,
                anticipatePin: 1,
                onEnterBack: () => gsap.set(".section01", {pin: true})
            }
        });
    
        mainVisual.from(".main-visual", { width: "40%", ease: "power1.inOut" })
                  .to(".main-visual", { width: "100%", ease: "power1.inOut" })
                  .to(".main-visual", { height: "100%", ease: "power1.inOut"}, "+=0.5")
                  .to(".mainsub .section01 .inner", { bottom: "150px", ease: "power1.inOut"}, "<")
                  .to(".main-title-wrap", { color: "#fff", ease: "power1.inOut"}, "<")
                  .to(".main-category", { color: "#fff", ease: "power1.inOut"}, "<");
    
        // Optimize resize event handling
        let resizeTimeout;
        $(window).on('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                ScrollTrigger.refresh();
            }, 250);
        });
    

    } else {

        const mainVisual = gsap.timeline({
            scrollTrigger: {
                trigger: ".section01",
                start: "top top",
                scrub: 2,
                pin: true,
                anticipatePin: 1,
                onEnterBack: () => gsap.set(".section01", {pin: true})
            }
        });
    
        mainVisual.from(".main-visual", { width: "100%", height: "40%", ease: "power1.inOut" })
                  .to(".main-visual", { width: "100%", height: "100%", ease: "power1.inOut" })
                  .to(".mainsub .section01 .inner", { bottom: "50px", ease: "power1.inOut"}, "<")
                  .to(".main-title-wrap", { color: "#fff", ease: "power1.inOut"}, "<")
                  .to(".main-category", { color: "#fff", ease: "power1.inOut"}, "<");
    
        // Optimize resize event handling
        let resizeTimeout;
        $(window).on('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                ScrollTrigger.refresh();
            }, 250);
        });

    }
    

    const cont = gsap.utils.toArray('.cont');
    gsap.set(cont, {y: '30%', opacity: 0});
    cont.forEach(contItem => {
        gsap.to(contItem, {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.3,
            scrollTrigger: {
                trigger: contItem,
                start: 'top 80%',
                toggleActions: "restart none none reverse",
            }
        });
    });

    const targets = gsap.utils.toArray(".splitani");
    targets.forEach((target) => {
        let split = new SplitType(target, { type: "lines, words, chars" });
        gsap.from(split.lines, {
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

        // window.addEventListener('resize', function() {
        //     split.revert();
        //     split = new SplitType(target, { type: "lines, words, chars" });
        // });
    });


    const containerElement = document.querySelector('.sub01 .section04 .section-container');
    if (containerElement) {
        const containerHeight = containerElement.offsetHeight;
        const sub01con = gsap.timeline({
            scrollTrigger: {
                trigger: ".sub01 .section04",
                start: "top top",
                end: "+=300%",
                scrub: 2,
                pin: true,
                markers: false
            }
        });

        sub01con.from(".sub01 .section04 .section-container", {width: "50%", height: "45vh", delay: 1, ease: "power1.in"})
                .to(".sub01 .section04 .section-container", {width: "100%", height: "82vh", delay: 1, ease: "power1.in"})
                .to(".subimg1", {opacity: 0, delay: 2.5})
                .to(".subimg2", {opacity: 0, duration: 1, delay: .5})
                .to(".subimg3", {opacity: 0, duration: 1, delay: .5})
                .to(".subimg4", {opacity: 0, duration: 1, delay: .5});

        //const contentWrap = gsap.utils.toArray('.sub01 .section04 .content-wrap');
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
                    gsap.to(content, { y: yPos * 2.5, duration: 1 });
                });
            }
        });

    }




});


$(document).ready(function() {
    // if (window.innerWidth >= 768) {
    //     gsap.fromTo(".main-visual", {opacity: 0}, {opacity:1, duration: 1, ease: "power4.out"});
    //     const mainVisual = gsap.timeline();
    //     mainVisual.from(".main-visual", {width: "40vw", height: "40vh", x: "50vw", yPercent: -10, ease: "power1.inOut"})
    //               .from(".main-visual", {height: "40vh", ease: "power1.inOut"})
    //               .to(".main-visual", {height: "100%", ease: "power1.inOut"})
    //               .from(".main-title-wrap", {y: "-40vh", ease: "power1.inOut"},"<")
    //               .to(".main-title-wrap", {color: "#fff", ease: "power1.inOut"}, "<")
    //               .to(".main-category", {color: "#fff", ease: "power1.inOut"}, "<");
    
    //     ScrollTrigger.create({
    //         animation: mainVisual,
    //         trigger: ".section01",
    //         start: "top top",
    //         scrub: 2,
    //         pin: true,
    //         anticipatePin: 1,
    //         markers: true,
    //         onLeave: () => section02Pin()
    //     });

    // }

    // function section02Pin() {
    // ScrollTrigger.create({
    //     trigger: ".sub06 .section02",
    //     start: "top top",
    //     end: "+=300%",  // Continue the pin for 300% of the viewport height
    //     trigger: ".sub06 .section02",
    //     pin: true, // Pin the .section02 element
    //     animation: imageChange,
    //     scrub: true
    //     //onEnter: () => animateCards(gsap.utils.toArray('.content-wrap .content-card'))
    // });
//}



    //글자 애니메이션
    // const targets = gsap.utils.toArray(".splitani");

    // targets.forEach((target) => {
    //     let SplitClient = new SplitType(target, { type: "lines, words, chars" });
    //     let lines = SplitClient.lines;
    //     let words = SplitClient.words;
    //     let chars = SplitClient.chars;

    //     gsap.from(lines, {
    //         delay: 0.7,
    //         yPercent: 100,
    //         opacity: 0,
    //         duration: 0.5,
    //         ease: "circ.out",
    //         stagger: 0.3,
    //         scrollTrigger: {
    //             trigger: target,
    //             start: "top 80%",
    //             end: "bottom bottom",
    //             markers: false,
    //         }
    //     });
    // });
    

     // General content animations
    //  const cont = gsap.utils.toArray('.cont');
    //  gsap.set(cont, {y: '25%', opacity: 0});
    //  cont.forEach(contItem => {
    //      gsap.to(contItem, {
    //          y: 0,
    //          autoAlpha: 1,
    //          duration: 0.5,
    //          stagger: 0.3,
    //          scrollTrigger: {
    //              trigger: contItem,
    //              start: 'top 70%',
    //              toggleActions: "restart none none reverse",
    //          }
    //      });
    //  });



     // Additional sections - Example with sub01
    // const containerElement = document.querySelector('.sub01 .section04 .section-container');
    // if (containerElement) {
    //     const containerHeight = containerElement.offsetHeight;
    //     const sub01con = gsap.timeline();
    //     sub01con.from(".sub01 .section-container", {width: "40vw", height: "30vh", y: "-10vh", delay: 1, ease: "power1.in", scrub: 2})
    //             .to(".subimg1", {opacity: 0, delay: 2.5})
    //             .to(".subimg2", {opacity: 0, duration: 1, delay: .5})
    //             .to(".subimg3", {opacity: 0, duration: 1, delay: .5})
    //             .to(".subimg4", {opacity: 0, duration: 1, delay: .5});

    //     ScrollTrigger.create({
    //         animation: sub01con,
    //         trigger: ".sub01 .section04",
    //         start: "top top",
    //         end: "+=270%",
    //         scrub: 2,
    //         ease: "power1.in",
    //         pin: true,
    //         anticipatePin: 1,
    //         markers: false
    //     });

    //     const contentWrap = gsap.utils.toArray('.sub01 .section04 .content-wrap');
    //     contentWrap.forEach((content, index) => {
    //         gsap.set(content, { y: containerHeight * (index + 1) });
    //     });

    //     ScrollTrigger.create({
    //         trigger: ".sub01 .section04",
    //         start: "top top",
    //         end: "+=300%",
    //         scrub: true,
    //         markers: false,
    //         onUpdate: self => {
    //             const progress = self.progress;
    //             contentWrap.forEach((content, index) => {
    //                 const yPos = -containerHeight * 2 * progress + containerHeight * (index + 1);
    //                 gsap.to(content, { y: yPos * 2, duration: 1 });
    //             });
    //         }
    //     });
    // }



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
            mission.to(".photo2", {opacity: 1, delay: 0.5})
                   .to(".photo3", {opacity: 1});
        
            ScrollTrigger.create({
                animation: mission,
                trigger: ".photos",
                start: "top 70%",
                end: "+=760 top",
                scrub: 1,
                anticipatePin: 1,
                pinSpace: 0,
                //markers: true
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



    $('.more-btn').click(function() {
        $(this).toggleClass('active');
        $('.view-fulltext').toggle();
      });
    

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

