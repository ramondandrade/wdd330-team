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
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("so-cart")) || [];

  // Find if the product exist in the cart
  const existingProduct = cart.find(item => item.Id === product.Id);

  if (existingProduct) {
    
    existingProduct.Quantity = (existingProduct.Quantity || 1) + 1;
  } else {
    
    product.Quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("so-cart", JSON.stringify(cart));
}
