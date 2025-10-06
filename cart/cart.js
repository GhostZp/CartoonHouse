// Shoppin cart
let cart = [];

// TODO: Miten erotetaan ja renderöidään tuotteet omiin kategorioihin?
// TODO: Miten erotetaan kuvat cartissa ja menussa että ne voi olla eri kokoiset?

// Render products to main body
function renderProducts() {
    const productsContainer = document.querySelector('.products');
    product.forEach(product => {
    const productHTML = `
        <div class="item">
            <div class="item-container">
                <div class="item-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="describe">
                    <h2>${product.name}</h2>
                    <p>${product.price} €</p>
                </div>
                <div class="add-to-cart" onclick="addToCart('${product.id}')">
                    <img src="../src/img/cartoonhouse_green.png" alt="Add to cart">
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
        console.log('Tuote on jo korissa');
        changeUnitAmount('plus', id)
    } else {
        const item = product.find(p => p.id === id);
        cart.push({ ...item, units: 1 });
        console.log('Lisätty koriin:', cart);
    }
    updateCart();
};

// Render items to cart
function updateCart() {
    renderCartItems();
    renderTotal();
};

function renderCartItems() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = "";  // Clear cart
    cart.forEach((item) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <div class="item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div>
                    <h4>${item.name}</h4>
                </div>
                <div class="price-info">
                    <small>${item.price}€</small>
                </div>
                <div class="unit-count">
                    <span class="button-plus" onclick="changeUnitAmount('plus', '${item.id}')">+</span>
                    <span class="unit-counter">${item.units}</span>
                    <span class="button-minus" onclick="changeUnitAmount('minus', '${item.id}')">-</span>
                </div>
            </div>
        `
    });
};

// Change the amount of single item
function changeUnitAmount(action, id) {
    cart = cart.map((item) => {
        let units = item.units;

        if (item.id === id) {
            if (action === 'minus') {
                if (units === 1){
                    return null; // Remove item from cart
                }else{
                    units --;
                }
            } else if (action === 'plus'){
                units ++;
            }
            return {
                ...item,
                units,
            };
        }
        return item;
    }).filter(Boolean);
    updateCart();
};


// Calculate and render total price
function renderTotal() {
    const subTotal = document.querySelector('.total-price');
    let totalPrice = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.units;
    })
    subTotal.innerHTML = `${totalPrice} €`;
};


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