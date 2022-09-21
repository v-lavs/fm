/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ../lib/swiper/swiper-bundle.min.js
//= include ../lib/scrollify.js
//= include ../lib/lightbox.js


// CUSTOM SCRIPTS


$(document).ready(function () {
    let sliderProcess = new Swiper(".slider-process", {
        // loop: true,
        speed: 900,
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 26,
        navigation: {
            nextEl: "#slider-process-next",
            prevEl: "#slider-process-prev",
        },
        breakpoints: {
            993:{
                slidesPerView: 3,
            }
        }
    });

    $.scrollify({
        section: ".js-scroll-section",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        scrollbars: true,
        setHeights: false,
        standardScrollElements: "",
        touchScroll: true,
    });

    const items = $('.process-slide__thumb').toArray().map(function (item) {
        const type = $(item).attr('data-type');
        return {
            src: $(item).attr('href'),
            type: type
        }
    });

     $('.process-slide__thumb').magnificPopup({
        items: items,
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });
});

