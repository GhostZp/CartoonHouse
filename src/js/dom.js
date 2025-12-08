document.addEventListener("DOMContentLoaded", () => {
  // Render products (only if these exist on the page)
  if (typeof renderProducts === "function") {
    renderProducts(appetizers, "Appetizers");
    renderProducts(main_dishes, "Main_dishes");
    renderProducts(desserts, "Desserts");
    renderProducts(drinks, "Drinks");
  }

  /* ---------------- CART MODAL ---------------- */
  const cartModal = document.querySelector("#cart");
  const openModal = document.querySelector(".cart-button");
  const closeModal = document.querySelector(".close-button");

  if (cartModal && openModal && closeModal) {
    openModal.addEventListener("click", () => {
      cartModal.classList.remove("slide-out");
      cartModal.classList.add("slide-in");
      cartModal.show();
    });

    closeModal.addEventListener("click", () => {
      cartModal.classList.remove("slide-in");
      cartModal.classList.add("slide-out");
    });
  }

  /* ---------------- LOGIN FORM ---------------- */
  const loginBtn = document.getElementById("log-in");
  const loginForm = document.getElementById("loginForm");
  const cancelBtn = document.getElementById("cancelBtn");

  if (loginBtn && loginForm && cancelBtn) {
    loginBtn.addEventListener("click", () => {
      loginForm.style.display = "block";
    });

    cancelBtn.addEventListener("click", () => {
      loginForm.style.display = "none";
    });

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "Patric" && password === "Kala") {
        window.location.href = "admin.html";
      } else {
        console.log("Virheelliset tunnukset");
      }
    });
  }

  /* ---------------- REGISTER FORM ---------------- */
  const registerForm = document.getElementById("registerForm");
  const openRegister = document.getElementById("open-register");
  const cancelRegister = document.getElementById("cancelRegisterBtn");

  if (registerForm && openRegister && cancelRegister) {
    openRegister.addEventListener("click", () => {
      registerForm.style.display = "block";
    });

    cancelRegister.addEventListener("click", () => {
      registerForm.style.display = "none";
    });
  }
});
