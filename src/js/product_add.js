document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.querySelector("#addToCart");

  if (!addToCartBtn) return;

  addToCartBtn.addEventListener("click", () => {
    // Get product data from the DOM
    const id = addToCartBtn.dataset.id;
    const name = document.querySelector("h2.divider")?.textContent.trim();
    const brand = document.querySelector("h3")?.textContent.trim();
    const priceText = document.querySelector(".product-card__price")?.textContent.trim();
    const price = parseFloat(priceText.replace("$", ""));
    const color = document.querySelector(".product__color")?.textContent.trim();
    const image = document.querySelector(".product-detail img")?.getAttribute("src");

    if (!id || !name || !price || !image) {
      alert("Error retrieving product data.");
      return;
    }

    // Product to add
    const product = {
      id,
      name,
      brand,
      price,
      color,
      image,
      quantity: 1,
    };

    // Load current cart
    let cart = JSON.parse(localStorage.getItem("so-cart")) || [];

    // Check if product already exists
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push(product);
    }

    // Save updated cart
    localStorage.setItem("so-cart", JSON.stringify(cart));

    alert("Product added to cart.");
    // Optional: redirect
    // window.location.href = "../cart/";
  });
});
