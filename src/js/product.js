import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
const productId = getParam("product"); // Product ID
const dataSource = new ProductData();

const product = new ProductDetails(productId, dataSource);
product.init();

// Using discount in products
// Get the name and current price from DOM
const productName = document.querySelector('h2.divider')?.textContent.trim();
const currentPriceEl = document.querySelector('.product-card__price');
const currentPrice = parseFloat(currentPriceEl?.textContent.replace('$', '') || 0);

// Define main prices by product name
const originalPrices = {
  "Ajax Tent - 3-Person, 3-Season": 249.99,
};
const originalPrice = originalPrices[productName];

if (originalPrice && currentPrice < originalPrice) {
  const discountPercent = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);

  const badge = document.createElement('span');
  badge.textContent = `${discountPercent}% OFF`;
  badge.style.backgroundColor = 'red';
  badge.style.color = 'white';
  badge.style.padding = '5px 10px';
  badge.style.borderRadius = '5px';
  badge.style.fontWeight = 'bold';
  badge.style.display = 'inline-block';
  badge.style.marginTop = '10px';

  currentPriceEl.insertAdjacentElement('afterend', badge);
}
