document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- CART MODAL ---------------- */
  const cartModal = document.querySelector("#cart");
  const openModal = document.querySelector(".cart-button");
  const closeModal = document.querySelector(".close-button");

  if (cartModal && openModal && closeModal) {
    openModal.addEventListener("click", () => {
      cartModal.classList.remove("slide-out");
      cartModal.classList.add("slide-in");
      // if cart is a <dialog> you can use show() or showModal()
      if (typeof cartModal.showModal === "function") {
        cartModal.showModal();
      } else if (typeof cartModal.show === "function") {
        cartModal.show();
      }
    });

    closeModal.addEventListener("click", () => {
      cartModal.classList.remove("slide-in");
      cartModal.classList.add("slide-out");
      // If it's a dialog, close it after the slide-out animation (no delay here)
      if (typeof cartModal.close === "function") {
        cartModal.close();
      }
    });
  }

  /* ---------------- LOGIN (safe guards) ---------------- */
  const loginDialog = document.getElementById("loginDialog");
  const loginOpenBtn = document.getElementById("log-in");
  const cancelLoginBtn = document.getElementById("cancelLogin");

  if (loginDialog && loginOpenBtn) {
    loginOpenBtn.addEventListener("click", () => {
      // prefer showModal for proper modal behavior
      if (typeof loginDialog.showModal === "function") {
        loginDialog.showModal();
      } else if (typeof loginDialog.show === "function") {
        loginDialog.show();
      }
    });
  }

  if (loginDialog && cancelLoginBtn) {
    cancelLoginBtn.addEventListener("click", () => {
      if (typeof loginDialog.close === "function") {
        loginDialog.close();
      }
    });
  }

  /* ---------------- REGISTER (safe guards) ---------------- */
  const registerDialog = document.getElementById("registerDialog");
  const registerOpenBtn = document.getElementById("open-register");
  const cancelRegisterBtn = document.getElementById("cancelRegister");

  if (registerDialog && registerOpenBtn) {
    registerOpenBtn.addEventListener("click", () => {
      if (typeof registerDialog.showModal === "function") {
        registerDialog.showModal();
      } else if (typeof registerDialog.show === "function") {
        registerDialog.show();
      }
    });
  }

  if (registerDialog && cancelRegisterBtn) {
    cancelRegisterBtn.addEventListener("click", () => {
      if (typeof registerDialog.close === "function") {
        registerDialog.close();
      }
    });
  }
});
