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
    $(".menu__link").on('click', function (e) {
        const id = e.currentTarget.href.split('#')[1];

        const i = $('.js-scroll-section').toArray().findIndex((el) => {
            return el.id === id;
        });

        $.scrollify.move(i);
    });


    const slidesCount = $('.slider-process .swiper-slide').length;

    let sliderProcess = new Swiper(".slider-process", {
        speed: 900,
        centeredSlides: true,
        initialSlide: Math.round(slidesCount / 2) - 1,
        spaceBetween: 36,
        navigation: {
            nextEl: "#slider-process-next",
            prevEl: "#slider-process-prev",
        },
        breakpoints: {
            580: {
                spaceBetween: 26,
                slidesPerView: 'auto'
            },
        }
    });

    function scroll_page() {
        if (window.innerWidth <= 768) {
            if (window.innerHeight > window.innerWidth) {
                $.scrollify.destroy();
            }
        } else {
            $(function () {
                $.scrollify({
                    section: ".js-scroll-section",
                    easing: "easeOutQuad",
                    scrollSpeed: 1100,
                    scrollbars: true,
                    setHeights: false,
                    updateHash: false,
                    touchScroll: true,
                });
            });
        }
    }

    $(window).on('load', function () {
        scroll_page();
    });

    $(window).resize(function () {
        scroll_page();
    });


    const $galleryThumbs = $('.process-slide__thumb');
    const items = $galleryThumbs.toArray().map(function (item) {
        const type = $(item).attr('data-type');

        return {
            src: $(item).attr('href'),
            type: type
        }
    });

    let activeThumbIndex = 0;

    $galleryThumbs.on('click', function () {
        activeThumbIndex = $(this).parent('.swiper-slide').index();
    });

    $galleryThumbs.magnificPopup({
        items: items,
        callbacks: {
            open: function () {
                $.magnificPopup.instance.goTo(activeThumbIndex);
            }
        },
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });
});



