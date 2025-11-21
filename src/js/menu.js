// Render products to main body
function renderProducts(products, categoryId) {
    const productsContainer = document.querySelector(`#${categoryId} .products`);
    productsContainer.innerHTML = '';

    products.forEach(item => {
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
                <div class="add-to-cart" onclick="addToCart('${item.id}')">Add to cart</div>
            </div>
        </div>
    `;
    productsContainer.innerHTML += productHTML;
    });
}

// Add products to shopping cart
function addToCart(id) {
    if (cart.some(item => item.id === id)) {
        console.log('Item already in cart.');
        changeUnitAmount('plus', id);
    } else {
        // Search through all item sets
        const itemSets = [appetizers, main_dishes, desserts, drinks];
        let item = null;

        for (const set of itemSets) {
            item = set.find(p => p.id === id);
            if (item) break; // stop searching once found
        }

        if (item) {
            cart.push({ ...item, units: 1 });
            console.log('Added item to cart:', cart);
        } else {
            console.warn('Item not found:', id);
        }
    }

    updateCart();
}


// Tabs script
const tabs = document.querySelectorAll(".tablinks");
const contents = document.querySelectorAll(".tabcontent");

tabs.forEach(tab => {
  tab.addEventListener("click", function () {
    const menuName = this.dataset.target;

    // Hide all tabcontent
    contents.forEach(c => c.style.display = "none");

    // Remove active class
    tabs.forEach(t => t.classList.remove("active"));

    // Show selected
    document.getElementById(menuName).style.display = "block";
    this.classList.add("active");
  });
});
