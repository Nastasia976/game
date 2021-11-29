new Swiper('.swiper', {
    slidesPerGroup: 1,
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    autoHeight: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },

});
new Swiper('.swiper2', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    centeredSlides: false,
    initialSlide: 1,
    effect: 'fade',
    autoplay: {
        delay: 4000,
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    fadeEffect: {
        crossFade: true,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    

});