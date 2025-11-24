document.addEventListener("DOMContentLoaded", () => {
  let orders = JSON.parse(localStorage.getItem("cart-items")) || [];

  const container = document.getElementById("pendingOrders");

  orders.forEach((order, index) => {
    // Creates a container for single order
    const singleOrder = document.createElement("div");
    // Displays order number
    singleOrder.innerHTML = `<h2>Order ${index + 1}</h2>`;

    // Goes throught each order´s items and displays them
    order.forEach((item) => {
      const div = document.createElement("div");
      div.textContent = `${item.name} - ${item.units} kpl - ${item.price}€`;
      singleOrder.appendChild(div);
    });

    container.appendChild(singleOrder);
  });
});
