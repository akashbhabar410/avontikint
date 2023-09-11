$(function() {
    $("#tabs").tabs();
});

// Page loading animation

$("#preloader").animate({
    'opacity': '0'
}, 600, function() {
    setTimeout(function() {
        $("#preloader").css("visibility", "hidden").fadeOut();
    }, 300);
});

// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     var box = $('.header-text').height();
//     var header = $('header').height();

//     if (scroll >= box - header) {
//         $("header").addClass("background-header");
//     } else {
//         $("header").removeClass("background-header");
//     }
// });

if ($('.owl-testimonials').length) {
    $('.owl-testimonials').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        margin: 30,
        autoplay: false,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            460: {
                items: 1,
                margin: 0
            },
            576: {
                items: 2,
                margin: 20
            },
            992: {
                items: 2,
                margin: 30
            }
        }
    });
}
if ($('.owl-partners').length) {
    $('.owl-partners').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        margin: 30,
        autoplay: false,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            460: {
                items: 1,
                margin: 0
            },
            576: {
                items: 2,
                margin: 20
            },
            992: {
                items: 4,
                margin: 30
            }
        }
    });
}


$("#success-alert").alert();
window.setTimeout(function() {
    $("#success-alert").alert('close');
}, 2000);

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
});
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})