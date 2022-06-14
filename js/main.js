$(document).ready(function() {
    $("header .btn-menu").on("click", function(){
        $("nav").animate({
            "top" : "0"
        })
        $("h1 img.m").animate({
            "opacity" : "100"
        })
    })
    $("header .btn-close").on("click", function(){
        $("nav").animate({
            "top" : "-100%"
        })
        $("h1 img.m").animate({
            "opacity" : "0"
        })
    });


    $(".col7 ul").slick({
        // slidesToScroll : 1,
        autoplay : true,
        fade : true,
        autoplaySpeed : 3000,
        nextArrow: $(".next"),
        prevArrow: $(".prev"),
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    fade: false,
                    slidesToShow : 7
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    fade: false,
                    slidesToShow : 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    slidesToShow : 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow : 1
                }
            }
        ]
    });
    

});


