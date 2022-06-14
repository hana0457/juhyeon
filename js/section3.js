$(document).ready(function () {
    var swiperOpt = {
        loop: true,
        navigation: {
            nextEl: ".btn-m .next",
            prevEl: ".btn-m .prev",
        },
    }

    var sliderImgList = [
        [
            "./images/login1.jpg",
            "./images/login2.jpg",
            "./images/login3.jpg",
            "./images/login4.jpg"
        ],
        [
            "./images/auth1.jpg",
            "./images/auth2.jpg",
            "./images/auth3.jpg",
            "./images/auto4.jpg",
        ],
        [
            "./images/proof1.jpg",
            "./images/proof2.jpg",
            "./images/proof3.jpg",
            "./images/proof4.jpg"

        ],
        [
            "./images/seal1.jpg",
            "./images/seal2.jpg",
            "./images/seal3.jpg",
            "./images/seal4.jpg",

        ],
        [
            "./images/regi1.jpg",
            "./images/regi2.jpg",
            "./images/regi3.jpg",
            "./images/regi4.jpg",

        ],
        [
            "./images/notice1.jpg",
            "./images/notice2.jpg",
            "./images/notice3.jpg",
            "./images/notice4.jpg",

        ]
    ];

    function setSlider(sliderIdx) {
        $(".slider-wrap").append(`
            <div class="slider swiper">
                <div class="swiper-wrapper">
                    <div class="item swiper-slide"><img src="${sliderImgList[sliderIdx][0]}" alt=""></div>
                    <div class="item swiper-slide"><img src="${sliderImgList[sliderIdx][1]}" alt=""></div>
                    <div class="item swiper-slide"><img src="${sliderImgList[sliderIdx][2]}" alt=""></div>
                    <div class="item swiper-slide"><img src="${sliderImgList[sliderIdx][3]}" alt=""></div>
                </div>
            </div>
        `);

        var swiper = new Swiper(".col3 .slider", swiperOpt);
    }

    setSlider(0);

    $(window).on("scroll", function () {
        var sliderCount = 6;
        var scr = $(window).scrollTop();
        var scrMeasured = $(".col3").offset().top;
        var scrCalc = scr - scrMeasured;
        var txtBoxHeight = $(".col3 .txt .box").height();
        var idx = parseInt(scrCalc / txtBoxHeight);

        if (idx >= 0 && idx < sliderCount) {
            // $(".col3 .mockup .slider").eq(idx).stop().fadeIn();
            // $(".col3 .mockup .slider").eq(idx).siblings().stop().fadeOut();
            $(".slider-wrap div").remove();
            setSlider(idx);
        }
    })
})