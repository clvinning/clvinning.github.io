$(document).ready(function () {
  
  //event handlers
  /*
  $(".main-wrapper").children().on("click", function () {
    
    $(this).addClass("grow");
  */
  $(".overlay").on("mouseenter", function() {
    $(this).addClass("zoom-box");
  });
  $(".products-wrapper section").on("mouseleave", function() {
    $(".overlay").removeClass("zoom-box");
  });
});
