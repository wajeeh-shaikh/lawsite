// header script
$(function() {
    $(".navbar-set li > a").each(function() {
        var href = $(this).attr('href');
        var heading = $(this).text();
        $('.sidenav').append('<a href="' + href + '">' + heading + '<\/a>');
    });
});



function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
}







// blogslider start
$('.blog-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// blogslider end

// product slider jas start

$('.about-slid').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.about-slid1'

});
$('.about-slid1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.about-slid',
    dots: false,
    cssEase: 'linear ',
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    focusOnSelect: true
});
// product slider jas end

// simple slick slider start
$(".regular").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

// simple slick slider end
$(document).ready(function() {
    $('.menu-toggle').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('open');
    });
    $('.ham-icn').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('open');
    });
});
// wow animation js 

$(function() {
    new WOW().init();
});


// responsive menu js 

$(function() {
    $('#menu').slicknav();
});



// slick slider in tabs js start

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
}


// slick slider in tabs js end


// hover tilt
VanillaTilt.init(document.querySelector(".about-box ul li"), {
    max: 30,
    speed: 3000,
    scale: 1.02,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 400,
    glare: true,


});

VanillaTilt.init(document.querySelectorAll(".about-box ul.dl li"), {
    max: 30,
    speed: 2000,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 500,
    glare: true,
});

VanillaTilt.init(document.querySelectorAll(".about-box ul.dl2 li"), {
    max: 30,
    speed: 2000,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 500,
    glare: true,
});

VanillaTilt.init(document.querySelectorAll(".blog-img"), {
    max: 30,
    speed: 2000,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 500,
    // glare: true,
});
VanillaTilt.init(document.querySelectorAll(".service-box"), {
    max: 30,
    speed: 2000,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 500,
    // glare: true,
});

// gsap start



let tl = gsap.timeline({
    // // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: ".heading-wrap  ",
        start: "0% ", // when the top of the trigger hits the top of the viewport
        end: "120%", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers: true,
        // pin: true,

    }
});

tl.to('.heading-text', {
    x: 700,
})


// fixed hedr
$(window).scroll(function() {
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

// cursor 
