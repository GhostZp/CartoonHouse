// Shoppin cart
let cart = [];

// Render items to cart
function updateCart() {
  renderCartItems();
  renderTotal();
}

function renderCartItems() {
  const cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = ""; // Clear cart
  cart.forEach((item) => {
    cartItems.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-img">
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
                <div onclick="deleteItem('${item.id}')">
                  <img src="../icons/trashcan.png">
                </div>
            </div>
        `;
  });
}

// Change the amount of single item
function changeUnitAmount(action, id) {
  cart = cart
    .map((item) => {
      let units = item.units;

      if (item.id === id) {
        if (action === "minus") {
          if (units === 1) {
            return null; // Returns null for items to be removed
          } else {
            units--;
          }
        } else if (action === "plus") {
          units++;
        }
        return {
          ...item,
          units,
        };
      }
      return item;
    })
    .filter(Boolean); // Remove items that are null
  updateCart();
}

// Delete the item
function deleteItem(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

// Empty your cart
function emptyCart() {
  cart = [];
  updateCart();
}

// Calculate and render total price
function renderTotal() {
  const subTotal = document.querySelector(".total-price");
  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.units;
  });
  subTotal.innerHTML = `${totalPrice} €`;
}

// Check out saves order to local storage
function checkOut() {
  // Checks if there already exists order list and creates new if needed
  let orders = JSON.parse(localStorage.getItem("cart-items")) || [];
  // Adds new order to the list
  orders.push([...cart]);

  localStorage.setItem("cart-items", JSON.stringify(orders));
  emptyCart();
}
