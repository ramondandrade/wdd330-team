import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
const productId = getParam("product"); // Product ID
const dataSource = new ProductData();

const product = new ProductDetails(productId, dataSource);
product.init();
