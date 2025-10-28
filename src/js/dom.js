// DOM-Listener
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(appetizers, 'Appetizers');
    renderProducts(main_dishes, 'Main_dishes');
    renderProducts(desserts, 'Desserts');
    renderProducts(drinks, 'Drinks');

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

// Opens Appetizers tab when site loads
document.addEventListener("DOMContentLoaded", function() {
  const firstTab = document.getElementsByClassName("tablinks")[0];
  openMenu({ currentTarget: firstTab }, "Appetizers");
})