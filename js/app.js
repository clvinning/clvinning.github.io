$(document).ready(function () {
  
  //event handlers
  /*
  $(".main-wrapper").children().on("click", function () {
    
    $(this).addClass("grow");
  */
  var slides = [
    {src: 'http://lorempixel.com//1366/768'},
    {src: 'http://lorempixel.com//1366/761'},
    {src: 'http://lorempixel.com//1366/762'},
    {src: 'http://lorempixel.com//1366/763'},
    {src: 'http://lorempixel.com//1366/764'},
    {src: 'http://lorempixel.com//1366/765'},
    {src: 'http://lorempixel.com//1366/766'}
  ];
  
  $(".overlay").on("mouseenter", function () {
    $(this).addClass("zoom-box");
  });
  
  $(".products-wrapper section").on("mouseleave", function () {
    $(".overlay").removeClass("zoom-box");
  });
  
  $('.jR3DCarouselGallery').jR3DCarousel({
    slides: slides
  });
  
});
