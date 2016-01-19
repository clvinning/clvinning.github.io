$(document).ready(function () {
  
  //event handlers
  /*
  $(".main-wrapper").children().on("click", function () {
    
    $(this).addClass("grow");
  */
  $(".overlay").on("mouseenter", function () {
    $(this).addClass("zoom-box");
  });
  $(".products-wrapper section").on("mouseleave", function () {
    $(".overlay").removeClass("zoom-box");
  });
  
  //create list of images for slick
  //when the method is called to change image
  //get current images index and set the
  //css property to the appropriate
  //background-image: property
  
  $(".gallery-wrapper").slick({
    
  });
});
