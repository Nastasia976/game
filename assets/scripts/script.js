$(document).ready(function () {
    $('.main-slider').slick({
        slidesToShow: 3,
        slidesToScrol: 1,
        centerMode: true,
        infinity: true,
        initialSlide: 1,
        autoplay: false,
        prevArrow: $('.main-slider__slick-prev'),
        nextArrow: $('.main-slider__slick-next'),
        responsive: [
            {
                breakpoint: 1051,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                    autoplay: true,
                    autoplaySpeed: 4000,

                }
            }
        ]
    });
});
