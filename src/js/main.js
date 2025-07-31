import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const productList = new ProductList("tents", dataSource, element);

productList.init();


 document.getElementById("newsletterForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Thanks for subscribing, ${email}!`);
    e.target.reset();
  });