/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../lib/jquery.min.js ;
// = include ../lib/jquery.easing.min.js ;
//= include ../lib/swiper/swiper-bundle.min.js
//= include ../lib/scrollify.js
//= include ../lib/lightbox.js


// CUSTOM SCRIPTS


$(document).ready(function () {
    let sliderProcess = new Swiper(".slider-process", {
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
            993: {
                slidesPerView: 3,
            }
        }
    });

    function scroll_page(){
        if(window.innerWidth <= 768){
            if(window.innerHeight > window.innerWidth){
                $.scrollify.destroy();
            }
        }
        else{
            $(function() {
                $.scrollify({
                    section: ".js-scroll-section",
                    interstitialSection: "",
                    easing: "easeOutQuad",
                    // easing: "easeOutExpo",
                    scrollSpeed: 1100,
                    scrollbars: true,
                    setHeights: false,
                    standardScrollElements: "",
                    touchScroll: true,
                });
            });
        }
    }

    window.addEventListener('resize', function(event){
        scroll_page();
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
})
;

