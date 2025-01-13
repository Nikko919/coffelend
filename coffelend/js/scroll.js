// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('.first__menu a');

//     window.addEventListener('scroll', () => {
//         let current = '';

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;
//             if (pageYOffset >= sectionTop - sectionHeight / 3) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href').substring(1) === current) {
//                 link.classList.add('active');
//             }
//         });
//     });
// });




// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('.first__menu a');

//     window.addEventListener('scroll', () => {
//         let current = '';

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;
//             if (pageYOffset >= sectionTop - sectionHeight / 3) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href').substring(1) === current) {
//                 link.classList.add('active');
//             }
//         });
//     });

//     navLinks.forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();
//             navLinks.forEach(navLink => navLink.classList.remove('active'));
//             link.classList.add('active');

//             const targetId = link.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);
//             if (targetSection) {
//                 window.scrollTo({
//                     top: targetSection.offsetTop,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });
