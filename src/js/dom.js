// DOM-Listener
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(appetizers, "Appetizers");
  renderProducts(main_dishes, "Main_dishes");
  renderProducts(desserts, "Desserts");
  renderProducts(drinks, "Drinks");

  //cartDialog and its opening and closing functions
  const cartModal = document.querySelector("#cart");
  const openModal = document.querySelector(".cart-button");
  const closeModal = document.querySelector(".close-button");

  openModal.addEventListener("click", () => {
    cartModal.classList.remove("slide-out");
    cartModal.classList.add("slide-in");
    cartModal.show();
  });

  closeModal.addEventListener("click", () => {
    cartModal.classList.remove("slide-in");
    cartModal.classList.add("slide-out");
  });

  // Empty your cart
  document.getElementById("trash").addEventListener("click", () => {
    const cartItems = document.querySelector(".cart-items");
    const subTotal = document.querySelector(".total-price");
    cartItems.innerHTML = ""; // Clear cart
    subTotal.innerHTML = "0 €";
  });
});

// Opens Appetizers tab when site loads
document.addEventListener("DOMContentLoaded", function () {
  const firstTab = document.getElementsByClassName("tablinks")[0];
  openMenu({ currentTarget: firstTab }, "Appetizers");
});
