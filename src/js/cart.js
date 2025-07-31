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