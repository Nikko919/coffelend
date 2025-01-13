

// document.addEventListener('DOMContentLoaded', () => {
//     const openModalButtons = document.querySelectorAll('.card__btn');
//     const modals = document.querySelectorAll('.popup');
//     const closeButtons = document.querySelectorAll('.close-button');
//     // const closrBg = document.querySelectorAll('.bgcolor');

//     openModalButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const modalId = button.getAttribute('data-modal');
//             const modal = document.getElementById(modalId);
//             modal.classList.remove('popup-block');
//         });
//     });

//     closeButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             modals.forEach(modal => {
//                 modal.classList.add('popup-block');
//             });
//         });
//     });

//     window.addEventListener('click', event => {
//         modals.forEach(modal => {
//             if (event.target === modal) {
//                 modal.classList.add('popup-block');
//             }
//         });
//     });
//     window.addEventListener('click', event => {
//         closrBg.forEach(modal => {
//             if (event.target === modal) {
//                 modal.classList.add('popup-block');
//             }
//         });
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('.card__btn');
    const modals = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.close-button');
    const popup1Elements = document.querySelectorAll('.popup1');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.remove('popup-block');
            document.body.classList.add('no-scroll');
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.classList.add('popup-block');
            });
            document.body.classList.remove('no-scroll');
        });
    });

    window.addEventListener('click', event => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.classList.add('popup-block');
                document.body.classList.remove('no-scroll');
            }
        });
    });

    popup1Elements.forEach(element => {
        element.addEventListener('click', event => {
            if (event.target === element) {
                document.body.classList.remove('no-scroll');
            }
        });
    });
});



function adjustModalHeight() {
    const modal = document.querySelector('.popup1');
    const modalContent = document.querySelector('.pop-up__card-box');
    const windowHeight = window.innerHeight;

    modalContent.style.maxHeight = `${windowHeight * 0.9}px`; // 90% of the window height
}

window.addEventListener('resize', adjustModalHeight);
window.addEventListener('orientationchange', adjustModalHeight);

// Initial adjustment
adjustModalHeight();











