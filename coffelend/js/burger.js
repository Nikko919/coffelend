
// document.querySelector('.menuToggle').addEventListener('click', function () {
//     document.querySelector('.menu').addEventListener('burgers__active');
//     document.querySelector('.overlay').addEventListener('.burgers__active');
// });

// document.querySelector('.closeMenu').addEventListener('click', function () {
//     document.querySelector('.menu').remove('.burgers__active');
//     document.querySelector('.overlay').remove('.burgers__active');
// });

// document.querySelector('.overlay').addEventListener('click', function () {
//     document.querySelector('.menu').addEventListener('.burgers__active');
//     this.remove('burgers__active');
// });

// document.querySelectorAll('.menu a').forEach(function (item) {
//     item.addEventListener('click', function () {
//         document.querySelector('.menu').remove('.burgers__active');
//         document.querySelector('.overlay').remove('.burgers__active');
//     });
// });




// function toggleMenu() {
//     document.querySelector('.menu').addEventListener('.burgers__active');
//     document.querySelector('.overlay').addEventListener('.burgers__active');
// }

// function closeMenu() {
//     document.querySelector('.menu').remove('burgers__active');
//     document.querySelector('.overlay').remove('burgers__active');
// }

// function handleMenuToggle() {
//     if (window.innerWidth <= 1020) {
//         document.querySelector('.menuToggle').addEventListener('click', toggleMenu);
//         document.querySelector('.closeMenu').addEventListener('click', closeMenu);
//         document.querySelector('.overlay').addEventListener('click', closeMenu);
//         document.querySelectorAll('.menu a').forEach(function (item) {
//             item.addEventListener('click', closeMenu);
//         });
//     } else {
//         document.querySelector('.menu').addEventListener('.burgers__active');
//         document.querySelector('.menuToggle').removeEventListener('click', toggleMenu);
//         document.querySelector('.closeMenu').removeEventListener('click', closeMenu);
//         document.querySelector('.overlay').removeEventListener('click', closeMenu);
//         document.querySelectorAll('.menu a').forEach(function (item) {
//             item.removeEventListener('click', closeMenu);
//         });
//     }
// }

// window.addEventListener('resize', handleMenuToggle);
// handleMenuToggle();



const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.menuToggle');
const closeBtn = document.querySelector('.closeMenu');
const over = document.querySelector('.overlay');

const menuItems = document.querySelectorAll('.menu__list-item');






// Функция для открытия меню
function openMenuHandler() {
    menu.classList.add('open');
    over.classList.add('open');
}

// Функция для закрытия меню
function closeMenuHandler() {
    menu.classList.remove('open');
    over.classList.remove('open');
}

// Добавляем обработчики событий
openMenu.addEventListener('click', openMenuHandler);
closeBtn.addEventListener('click', closeMenuHandler);
over.addEventListener('click', closeMenuHandler);

// Добавляем обработчики событий для пунктов меню
menuItems.forEach(item => {
    item.addEventListener('click', closeMenuHandler);
});


// function openMenuHandler() {
//     menu.classList.add('burgers__active');
//     over.classList.add('burgers__active');
//     // menu.style.display = 'block'; // Пример изменения CSS-свойства
//     // over.style.display = 'block'; // Пример изменения CSS-свойства
// }

// // Функция для закрытия меню
// function closeMenuHandler() {
//     menu.classList.remove('burgers__active');
//     over.classList.remove('burgers__active');
//     // menu.style.display = 'none'; // Пример изменения CSS-свойства
//     // over.style.display = 'none'; // Пример изменения CSS-свойства
// }

// // Добавляем обработчики событий
// openMenu.addEventListener('click', openMenuHandler);
// closeBtn.addEventListener('click', closeMenuHandler);
// over.addEventListener('click', closeMenuHandler);

// menuItems.forEach(item => {
//     item.addEventListener('click', closeMenuHandler);
// });

