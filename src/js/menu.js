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
                <div class="add-to-cart" onclick="addToCart('${item.id}')">
                    <p>Add to cart</p>
                </div>
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
function openMenu(evt, menuName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}