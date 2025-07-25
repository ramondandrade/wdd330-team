import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

// Remove from cart feature
const element = document.querySelector(".product-list");
const cartList = new ShoppingCart(element);
cartList.init();

// Function renderCartItems
function renderCartItems(cartItems) {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = ""; 

  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.Name} - ${item.FinalPrice}</span>
      <button class="remove-item" data-id="${item.Id}" style="margin-left: 10px; color: red;">X</button>
    `;

    productList.appendChild(li);
  });

  // Remove
  document.querySelectorAll(".remove-item").forEach(button => {
    button.addEventListener("click", event => {
      const id = event.target.getAttribute("data-id");
      removeFromCart(id);
    });
  });
}

// item from the cart
function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("so-cart")) || [];
  const updatedCart = cart.filter(item => item.Id !== id); 
  localStorage.setItem("so-cart", JSON.stringify(updatedCart));
  renderCartItems(updatedCart);
}

// Load page
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("so-cart")) || [];
  renderCartItems(cart);
});

// Products ordered in the cart
const li = document.createElement("li");
li.style.display = "flex";
li.style.flexDirection = "row";
li.style.justifyContent = "space-between";
li.style.alignItems = "center";
li.style.marginBottom = "1rem";
li.style.border = "1px solid #ccc";
li.style.padding = "10px";
li.style.backgroundColor = "#f8f8f8";
