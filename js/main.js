$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:1000,
    responsiveClass:true,
    items:10,
    responsive:{
        0:{
            items:1,
            nav:true
        },
       1200:{
            items:3,
            nav:true
        },
       2500:{
            items:5,
            nav:true,
            loop:true
        }
    }
})

$(function() {
    $("h4").click(function(event) {
  $(this).closest(".work").find('.work-content').slideToggle(1000);
    });
});



});