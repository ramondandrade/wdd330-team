import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

const element = document.querySelector(".product-list");
const cartList = new ShoppingCart(element);

cartList.init();
