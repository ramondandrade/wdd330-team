import { getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const productId = getParam("product"); // Product ID
const dataSource = new ExternalServices();

const product = new ProductDetails(productId, dataSource);
product.init();

// Load Dom
window.addEventListener("DOMContentLoaded", () => {
  const productName = document.querySelector('h2.divider')?.textContent.trim();
  const currentPriceEl = document.querySelector('.product-card__price');
  const currentPrice = parseFloat(currentPriceEl?.textContent.replace('$', '') || 0);

  const originalPrices = {
    "Ajax Tent - 3-Person, 3-Season": 249.99,
  };

  const originalPrice = originalPrices[productName];

  if (originalPrice && currentPrice < originalPrice) {
    const discountPercent = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);

    // Create the badge
    const badge = document.createElement('div');
    badge.textContent = `${discountPercent}% OFF`;
    badge.classList.add('discount-flag');

    // Style
    const imgEl = document.querySelector('img.divider');
    if (imgEl) {
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.display = 'inline-block';

      wrapper.appendChild(imgEl.cloneNode(true));
      wrapper.appendChild(badge);
      imgEl.replaceWith(wrapper);
    }
  }
});