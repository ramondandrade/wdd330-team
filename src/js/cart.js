import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

// Remove from cart feature
const element = document.querySelector(".product-list");
const cartList = new ShoppingCart(element);
cartList.init();

if (cartList.total > 0) {
  // show our checkout button and total if there are items in the cart.
  document.querySelector(".list-footer").classList.remove("hide");
}


function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const cartContainer = document.querySelector(".product-list");

  if (!cartItems.length) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  cartContainer.innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  return `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Image || item.image}" alt="${item.Name || item.name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name || item.name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors?.[0]?.ColorName || item.color || "N/A"}</p>
    <p class="cart-card__quantity">qty: ${item.quantity || 1}</p>
    <p class="cart-card__price">$${item.FinalPrice || item.price}</p>
  </li>`;
}

// Run on page load
renderCartContents();
