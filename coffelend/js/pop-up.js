

document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('.open-popup');
    const modals = document.querySelectorAll('.popup1');
    const closeButtons = document.querySelectorAll('.close-popup');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.remove('hidden');
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.classList.add('hidden');
            });
        });
    });

    window.addEventListener('click', event => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });
});








