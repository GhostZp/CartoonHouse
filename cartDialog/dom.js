// DOM-Listener
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    //cartDialog and its opening and closing functions
    const cartModal = document.querySelector('#cart');
    const openModal = document.querySelector('.cart-button');
    const closeModal = document.querySelector('.close-button');

    openModal.addEventListener('click', () => {
        cartModal.classList.remove('slide-out');
        cartModal.classList.add('slide-in');
        cartModal.show();
    });

    closeModal.addEventListener('click', () => {
        cartModal.classList.remove('slide-in');
        cartModal.classList.add('slide-out');
    });
})
