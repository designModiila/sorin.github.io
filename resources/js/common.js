$(document).ready(function(){
  $('#header').load('/html/include/header.html')
  $('#footer').load('/html/include/footer.html')
  $('#footerV2').load('/html/include/footer_v2.html')

  // $(".js-select2").select2({minimumResultsForSearch: -1});
  
  $("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
  });


})

