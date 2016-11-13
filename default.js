

$(document).ready(function(){
  $("li").click(function(){
      var page = $(this).attr("id");
      $("#page-content").load(page + '.php');
  });
});
