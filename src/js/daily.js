// Render ONLY the first product to main body
function renderProducts(products, categoryId) {
    const productsContainer = document.querySelector(`#${categoryId} .products`);
    productsContainer.innerHTML = '';

    if (!products || products.length === 0) return;

    const item = products[0]; // first item only

    const productHTML = `
        <div class="item">
            <div class="item-container">
                <div class="menu-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="describe">
                    <h2>${item.name}</h2>
                    <p>${item.price.toFixed(2)} €</p>
                    <p>${item.allergens}</p>
                </div>
            </div>
        </div>
    `;

    productsContainer.innerHTML = productHTML;
}
