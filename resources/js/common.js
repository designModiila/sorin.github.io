$(document).ready(function(){
  $('#header').load('../include/header.html')
  $('#footer').load('../include/footer.html')
  $('#footerV2').load('../include/footer_v2.html')

  // $(".js-select2").select2({minimumResultsForSearch: -1});
  
  $("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
  });


})

