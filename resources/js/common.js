$(document).ready(function(){
  $('#header').load('../include/header.html')
  $('#footer').load('../include/footer.html')
  $('#footerV2').load('../include/footer_v2.html')
  $('#footerV3').load('../include/footer_v3.html')
  $('#footerMain').load('../include/footer_main.html')

  // $(".js-select2").select2({minimumResultsForSearch: -1});
  
  // $("#file").on('change',function(){
  //   var fileName = $("#file").val();
  //   $(".upload-name").val(fileName);
  // });


  const $btnTop = $('.btn-top');
  const buttonBottom = 30;
  const stopPoint = 50;

  const $btnCustomer = $('.btn-customer');
  const customerBottom = 90;
  const customerStop = 110;

  $(window).on('scroll', function() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const documentHeight = $(document).height();



    if (scrollTop > 100) {
      $btnTop.fadeIn();
    } else {
      $btnTop.fadeOut();
    }

    if (scrollTop + windowHeight >= documentHeight - stopPoint) {
      $btnTop.css({
        'position': 'absolute',
        'bottom': stopPoint + 'px'
      });
    } else {
      $btnTop.css({
        'position': 'fixed',
        'bottom': buttonBottom + 'px'
      });
    }

    if (scrollTop > 100) {
      $btnCustomer.fadeIn();
    } else {
      $btnCustomer.fadeOut();
    }
  
    if (scrollTop + windowHeight >= documentHeight - customerStop) {
      $btnCustomer.css({
        'position': 'absolute',
        'bottom': customerStop + 'px'
      });
    } else {
      $btnCustomer.css({
        'position': 'fixed',
        'bottom': customerBottom + 'px'
      });
    }

  });

  $btnTop.on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow',function() {
      $("#header").removeClass("active");
      $(".header-wrap h1").removeClass("active");
    });
  });
  $btnCustomer.on('click', function() {
    $('html, body').animate({
      scrollTop: $('#demo').offset().top
    }, 'slow');
  });

   
});

