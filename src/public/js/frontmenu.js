// ----------------------
// Global product arrays
// ----------------------
let appetizers = [];
let main_dishes = [];
let desserts = [];
let drinks = [];

// ----------------------
// Load menu from backend
// ----------------------
async function loadMenu() {
  try {
    const res = await fetch("http://localhost:5501/api/menu");
    const items = await res.json();
    console.log("API ITEMS:", items);

    // Normalize backend fields to match frontend expectations
    const normalized = items.map(i => ({
      id: i.food_id,
      name: i.title,
      price: Number(i.price),
      category_id: i.category_id,
      image: i.image
        ? `http://localhost:5501/img/${i.image.replace('../img/','')}`
        : "img/default.png",
      allergens: i.allergens || ""
    }));

    // Assign to global arrays (do not redeclare with const)
    appetizers  = normalized.filter(i => i.category_id === 1);
    main_dishes = normalized.filter(i => i.category_id === 2);
    desserts    = normalized.filter(i => i.category_id === 3);
    drinks      = normalized.filter(i => i.category_id === 4);

    // Render each section
    renderProducts(appetizers,  "Appetizers");
    renderProducts(main_dishes, "Main_dishes");
    renderProducts(desserts,    "Desserts");
    renderProducts(drinks,      "Drinks");

  } catch (err) {
    console.error("Failed to load menu from server:", err);
  }
}

// ----------------------
// Render products
// ----------------------
function renderProducts(products, categoryId) {
  const productsContainer = document.querySelector(`#${categoryId} .products`);
  if (!productsContainer) {
    console.warn(`No container found for category: ${categoryId}`);
    return;
  }

  productsContainer.innerHTML = "";

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
            <p>${item.allergens || "&nbsp;"}</p>
          </div>
          <div class="add-to-cart" onclick="addToCart('${item.id}')">Add to cart</div>
        </div>
      </div>
    `;
    productsContainer.innerHTML += productHTML;
  });
}

// ----------------------
// Add item to cart
// ----------------------
function addToCart(id) {
  if (cart.some(item => item.id == id)) {
    console.log("Item already in cart.");
    changeUnitAmount("plus", id);
  } else {
    const itemSets = [appetizers, main_dishes, desserts, drinks];
    let item = null;

    for (const set of itemSets) {
      item = set.find(p => p.id == id);
      if (item) break;
    }

    if (item) {
      cart.push({ ...item, units: 1 });
      console.log("Added item to cart:", cart);
    } else {
      console.warn("Item not found:", id);
    }
  }

  updateCart();
}

// ----------------------
// Tabs script
// ----------------------
const tabs = document.querySelectorAll(".tablinks");
const contents = document.querySelectorAll(".tabcontent");

tabs.forEach(tab => {
  tab.addEventListener("click", function () {
    const menuName = this.dataset.target;

    contents.forEach(c => (c.style.display = "none"));
    tabs.forEach(t => t.classList.remove("active"));

    document.getElementById(menuName).style.display = "block";
    this.classList.add("active");
  });
});

// ----------------------
// Load menu when page loads
// ----------------------
document.addEventListener("DOMContentLoaded", loadMenu);
