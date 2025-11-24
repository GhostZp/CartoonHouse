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

  //logInForm and its opening and closing functions
  const loginBtn = document.getElementById("log-in");
  const loginForm = document.getElementById("loginForm");
  const cancelBtn = document.getElementById("cancelBtn");

  // Open form
  loginBtn.addEventListener("click", () => {
    loginForm.style.display = "block";
  });
  // Close form
  cancelBtn.addEventListener("click", () => {
    loginForm.style.display = "none";
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = "Patric";
    const validPassword = "Kala";

    if (username === validUsername && password === validPassword) {
      window.location.href = "http://127.0.0.1:5501/src/pages/admin.html";
    } else {
      console.log("Virheelliset tunnukset");
    }
  });
});

// Opens Appetizers tab when site loads
document.addEventListener("DOMContentLoaded", function () {
  const firstTab = document.getElementsByClassName("tablinks")[0];
  openMenu({ currentTarget: firstTab }, "Appetizers");
});
