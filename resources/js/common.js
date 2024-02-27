$(document).ready(function(){
  $('#header').load('/resources/html/include/header.html')
  $('#footer').load('/resources/html/include/footer.html')

  // $(".js-select2").select2({minimumResultsForSearch: -1});
  
  $("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
  });


})

