var swiper = new Swiper(".Swiper__gallery", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".nav-button-next",
        prevEl: ".nav-button-prev",
    },

});


var swiper = new Swiper(".tabs__swiper", {
    // spaceBetween: 24,
    loop: false, // Отключает бесконечную прокрутку
    allowTouchMove: true, // Разрешает прокрутку при касании
    resistance: true, // Включает упругость при достижении края
    resistanceRatio: 0, // Задает коэффициент упругости (0 отключает упругость)
    navigation: {
        nextEl: ".tabs__pog-next",
        prevEl: ".tabs__pog-prev",
    },
    breakpoints: {
        375: {
            slidesPerView: 1.2,

        },
        768: {
            spaceBetween: 30,
        },
        1024: {

            slidesPerView: 3,
            spaceBetween: 24,
        },
        1200: {
            centeredSlides: false,
            slidesPerColumn: 2,
            slidesPerView: 3,
            spaceBetween: 0,
            // slidesPerView: 1,
        },
    },
});
var swiper = new Swiper(".tabsTwo__swiper", {
    // spaceBetween: 24,
    loop: false, // Отключает бесконечную прокрутку
    allowTouchMove: true, // Разрешает прокрутку при касании
    resistance: true, // Включает упругость при достижении края
    resistanceRatio: 0, // Задает коэффициент упругости (0 отключает упругость)
    navigation: {
        nextEl: ".tabs__pog-next",
        prevEl: ".tabs__pog-prev",
    },
    breakpoints: {
        375: {
            slidesPerView: 1.2,

        },
        768: {
            spaceBetween: 30,
        },
        1024: {

            slidesPerView: 3,
            spaceBetween: 24,
        },
        1200: {
            centeredSlides: false,
            slidesPerColumn: 2,
            slidesPerView: 3,
            spaceBetween: 0,
            // slidesPerView: 1,
        },
    },
});

// swiper.on('slideChangeTransitionEnd', function () {
//     if (this.isEnd) {
//         this.allowTouchMove = true; // Отключает прокрутку при касании
//     } else {
//         this.allowTouchMove = false; // Включает прокрутку при касании
//     }
// });




var swiper = new Swiper(".first__swiper", {
    // slidesPerView: 3,
    breakpoints: {
        375: {
            slidesPerView: 1.2,
            // spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 25,
        },
        1200: {
            slidesPerView: 3,
            // spaceBetween: 25,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".cosmo__swiper", {
    // slidesPerView: 3,
    breakpoints: {

        375: {
            slidesPerView: 1.2,
            // spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 25,
        },
        1200: {
            slidesPerView: 3,
            // spaceBetween: 25,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".burgers__swiper", {
    // slidesPerView: 3,
    breakpoints: {

        375: {
            slidesPerView: 1.2,
            // spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 25,
        },
        1200: {
            slidesPerView: 3,
            // spaceBetween: 25,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".pizza__swiper", {
    // slidesPerView: 3,
    breakpoints: {

        375: {
            slidesPerView: 1.2,
            // spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 25,
        },
        1200: {
            slidesPerView: 3,
            // spaceBetween: 25,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".hotdrinks__swiper", {
    // slidesPerView: 3,
    breakpoints: {

        375: {
            slidesPerView: 1.2,
            // spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 25,
        },
        1200: {
            slidesPerView: 3,
            // spaceBetween: 25,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".salads__swiper", {
    // slidesPerView: 3,
    breakpoints: {

        375: {
            slidesPerView: 1.2,
            // spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 25,
        },
        1200: {
            slidesPerView: 3,
            // spaceBetween: 25,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".Colddrinks__swiper", {
    // slidesPerView: 3,
    breakpoints: {

        375: {
            slidesPerView: 1.2,
            // spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 25,
        },
        1200: {
            slidesPerView: 3,
            // spaceBetween: 25,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".snacks__swiper", {
    // slidesPerView: 3,
    breakpoints: {

        375: {
            slidesPerView: 1.2,
            // spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 25,
        },
        1200: {
            slidesPerView: 3,
            // spaceBetween: 25,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});






window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        }

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    const someFunc = (instance) => {
        if (instance) {
            instance.on('slideChange', function (e) {
                console.log('*** mySwiper.activeIndex', instance.activeIndex);
            });
        }
    };

    resizableSwiper(
        '(min-width: 1280px)',
        '.first__swiper',
        {
            loop: false,
            grabCursor: false,
            // spaceBetween: 32,
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination',
                clickable: false,
            },
        },
        someFunc
    );

    resizableSwiper(
        '(max-width: 1500px)',
        '.slider-2',
        {
            // loop: true,
            // spaceBetween: 10,
            // slidesPerView: 3,
            // freeMode: true,
            // breakpoints: {
            //     1200: {
            //         spaceBetween: 20,
            //     }
            // }
        }
    );
});