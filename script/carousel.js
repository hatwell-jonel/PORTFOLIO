$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    loop:true,
    nav:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1124:{
            items:3,
    nav:true,
        }
    }
  });
});