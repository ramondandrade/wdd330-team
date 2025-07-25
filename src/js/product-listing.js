import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const categoryId = getParam("category");
const dataSource = new ProductData(categoryId);
const element = document.querySelector(".product-list");
const productList = new ProductList(categoryId, dataSource, element);

productList.init();
