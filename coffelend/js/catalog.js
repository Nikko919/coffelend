// новейший скролллл
// document.addEventListener('DOMContentLoaded', function () {
//     function scrollToElement(element, duration) {
//         const startX = window.scrollX;
//         const startY = window.scrollY;
//         const targetRect = element.getBoundingClientRect();
//         const targetX = targetRect.left + window.scrollX;
//         const targetY = targetRect.top + window.scrollY;
//         const distanceX = targetX - startX;
//         const distanceY = targetY - startY;
//         const startTime = performance.now();

//         function animateScroll(currentTime) {
//             const timeElapsed = currentTime - startTime;
//             const progress = Math.min(timeElapsed / duration, 1);
//             const easing = easeInOutQuad(progress);
//             window.scrollTo(startX + distanceX * easing, startY + distanceY * easing);

//             if (timeElapsed < duration) {
//                 requestAnimationFrame(animateScroll);
//             }
//         }

//         function easeInOutQuad(t) {
//             return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
//         }

//         requestAnimationFrame(animateScroll);
//     }

//     function scrollMenuToElement(item, duration) {
//         const menuContainer = item.parentElement;
//         const startScrollLeft = menuContainer.scrollLeft;
//         const targetScrollLeft = item.offsetLeft - 100; // Отступ 100px от края
//         const distance = targetScrollLeft - startScrollLeft;
//         const startTime = performance.now();

//         function animateScroll(currentTime) {
//             const timeElapsed = currentTime - startTime;
//             const progress = Math.min(timeElapsed / duration, 1);
//             const easing = easeInOutQuad(progress);
//             menuContainer.scrollLeft = startScrollLeft + distance * easing;

//             if (timeElapsed < duration) {
//                 requestAnimationFrame(animateScroll);
//             }
//         }

//         function easeInOutQuad(t) {
//             return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
//         }

//         requestAnimationFrame(animateScroll);
//     }

//     document.querySelectorAll('.menu-item').forEach((item) => {
//         item.addEventListener('click', function (event) {
//             event.preventDefault(); // Отменяем стандартное поведение ссылки
//             const targetSelector = item.getAttribute('href');
//             const targetElement = document.querySelector(targetSelector);
//             if (targetElement) {
//                 scrollToElement(targetElement, 0); // Задаем продолжительность анимации в миллисекундах (1000 мс = 1 секунда)
//             }

//             // Удаляем класс 'active' у всех элементов меню
//             document.querySelectorAll('.menu-item').forEach((menuItem) => {
//                 menuItem.classList.remove('active');
//             });

//             // Добавляем класс 'active' к текущему элементу меню
//             item.classList.add('active');

//             // Плавно скроллим меню, чтобы активный элемент стал первым с отступом 100px от края
//             scrollMenuToElement(item, 300); // Задаем продолжительность анимации в миллисекундах (500 мс = 0.5 секунды)
//         });
//     });

//     // IntersectionObserver для автоматического добавления класса 'active'
//     const obser = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 document.querySelectorAll('.menu-item').forEach((link) => {
//                     let id = link.getAttribute('href').replace('#', '');
//                     if (id === entry.target.id) {
//                         link.classList.add('active');
//                         scrollMenuToElement(link, 300); // Плавно скроллим меню, чтобы активный элемент стал первым с отступом 100px от края
//                     } else {
//                         link.classList.remove('active');
//                     }
//                 });
//             }
//         });
//     }, {
//         threshold: 0.5
//     });

//     document.querySelectorAll('section').forEach(section => {
//         obser.observe(section);
//     });

// });

















function scrollMenuToElement(item, duration) {
    const menuContainer = item.parentElement;
    const startScrollLeft = menuContainer.scrollLeft;
    const targetScrollLeft = item.offsetLeft - 100; // Отступ 100px от края
    const distance = targetScrollLeft - startScrollLeft;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = easeInOutQuad(progress);
        menuContainer.scrollLeft = startScrollLeft + distance * easing;

        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    requestAnimationFrame(animateScroll);
}








let ww = document.documentElement.clientWidth;
let islick = false

document.addEventListener('resize', function () {
    ww = document.documentElement.clientWidth
})



const titleElemrnts = document.querySelectorAll('.visible-scroll');
const puntMenu = document.querySelectorAll('.menu-item');
// console.log(puntMenu)

// исчезновение меню когда доскролливается до футтера
document.addEventListener('scroll', function () {

    // уберает меню когда доскроллеваешь до футера
    const menu = document.querySelector('.first__menu-box');
    const targetBlock = document.querySelector('.footer');
    const targetBlockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (targetBlockPosition < windowHeight) {
        menu.classList.add('catalog-menu-nane');
    } else {
        menu.classList.remove('catalog-menu-nane');
    }
    if (islick) {

        return
    }
    let titleArr = Array.from(titleElemrnts);
    let puctM = Array.from(puntMenu);
    for (let i = 0; i < titleArr.length; i++) {
        // console.log(isElementInViewport(titleArr[i]))

        if (isElementInViewport(titleArr[i])) {
            Array.from(puntMenu).forEach((menuItem) => {
                menuItem.classList.remove('active');
            });

            // Добавляем класс 'active' к текущему элементу меню
            Array.from(puntMenu)[i].classList.add('active');
            if (ww < 1200 && !islick) scrollMenuToElement(Array.from(puntMenu)[i], 300);
        }
    }
});




function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // Проверяем, что элемент полностью виден
    const isVisible = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight &&
        rect.right <= windowWidth
    );

    return isVisible;
}
















document.addEventListener('DOMContentLoaded', function () {
    // if (ww >= 1200) return

    function scrollToElement(element, duration) {
        const startX = window.scrollX;
        const startY = window.scrollY;
        const targetRect = element.getBoundingClientRect();
        const targetX = targetRect.left + window.scrollX;
        const targetY = targetRect.top + window.scrollY;
        const distanceX = targetX - startX;
        const distanceY = targetY - startY;
        const startTime = performance.now();

        function animateScroll(currentTime) {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easing = easeInOutQuad(progress);
            window.scrollTo(startX + distanceX * easing, startY + distanceY * easing);

            if (timeElapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        }

        requestAnimationFrame(animateScroll);
    }

    // function scrollMenuToElement(item, duration) {
    //     const menuContainer = item.parentElement;
    //     const startScrollLeft = menuContainer.scrollLeft;
    //     const targetScrollLeft = item.offsetLeft - 100; // Отступ 100px от края
    //     const distance = targetScrollLeft - startScrollLeft;
    //     const startTime = performance.now();

    //     function animateScroll(currentTime) {
    //         const timeElapsed = currentTime - startTime;
    //         const progress = Math.min(timeElapsed / duration, 1);
    //         const easing = easeInOutQuad(progress);
    //         menuContainer.scrollLeft = startScrollLeft + distance * easing;

    //         if (timeElapsed < duration) {
    //             requestAnimationFrame(animateScroll);
    //         }
    //     }

    //     function easeInOutQuad(t) {
    //         return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    //     }

    //     requestAnimationFrame(animateScroll);
    // }

    document.querySelectorAll('.menu-item').forEach((item) => {

        item.addEventListener('click', function (event) {
            islick = true
            event.preventDefault(); // Отменяем стандартное поведение ссылки
            const targetSelector = item.getAttribute('href');
            const targetElement = document.querySelector(targetSelector);
            if (targetElement) {
                scrollToElement(targetElement, 0); // Задаем продолжительность анимации в миллисекундах (1000 мс = 1 секунда)
            }

            // Удаляем класс 'active' у всех элементов меню
            document.querySelectorAll('.menu-item').forEach((menuItem) => {
                menuItem.classList.remove('active');
            });

            // Добавляем класс 'active' к текущему элементу меню
            item.classList.add('active');

            // Плавно скроллим меню, чтобы активный элемент стал первым с отступом 100px от края
            scrollMenuToElement(item, 800); // Задаем продолжительность анимации в миллисекундах (300 мс = 0.3 секунды)
            setTimeout(() => islick = false, 800)
        });
    });

    // IntersectionObserver для автоматического добавления класса 'active'
    const obser = new IntersectionObserver((entries) => {

        console.log(islick)
        if (islick) return

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                document.querySelectorAll('.menu-item').forEach((link) => {
                    let id = link.getAttribute('href').replace('#', '');
                    if (id === entry.target.id) {
                        link.classList.add('active');
                        scrollMenuToElement(link, 900); // Плавно скроллим меню, чтобы активный элемент стал первым с отступом 100px от края

                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.8
    });

    // document.querySelectorAll('section').forEach(section => {
    //     obser.observe(section);
    // });
});
