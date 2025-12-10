document.addEventListener("DOMContentLoaded", () => {
  const sections = {
    Appetizers: appetizers,
    Main_dishes: main_dishes,
    Desserts: desserts,
    Drinks: drinks
  };

  for (const [key, value] of Object.entries(sections)) {
    renderProducts(value, key);
  }
});
