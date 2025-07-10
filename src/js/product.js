import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const productId = getParam("product"); // Product ID
const dataSource = new ProductData("tents");

const product = new ProductDetails(productId, dataSource);
product.init();
