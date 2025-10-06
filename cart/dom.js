// DOM-Listener
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    const showCartButton = document.querySelector('.cart-button');
    const closeCartButton = document.querySelector('.close-button');
    const body = document.querySelector('body');

    showCartButton.addEventListener('click', () => {
        body.classList.add('show-cart');
    });

    closeCartButton.addEventListener('click', () => {
        body.classList.remove('show-cart');
    });
});