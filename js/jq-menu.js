$(document).ready(function(){

$(window).scroll(function() {

    if ($(window).scrollTop() > 200) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.navbar').hasClass('open-nav')) {
        $('.navbar').removeClass('open-nav');
    } else {
        $('.navbar').addClass('open-nav');
    }
});

$('.navbar li a').click(function() {
    if ($('.navbar').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.navbar').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

});