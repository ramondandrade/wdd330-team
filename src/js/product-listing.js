import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam, createBreadcrumbs } from "./utils.mjs";

loadHeaderFooter();

const categoryId = getParam("category");
const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
const productList = new ProductList(categoryId, dataSource, element);
productList.init();
