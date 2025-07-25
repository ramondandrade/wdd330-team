import { renderListWithTemplate, qs } from "./utils.mjs";

function productCardTemplate(product) {

    return `<li class="product-card">
      <a href="/product_pages/index.html?product=${product.Id}">
        <img src="${product.Images.PrimaryMedium}" loading="lazy" alt="${product.Name} by ${product.Brand.Name}. Price ${product.FinalPrice} dollars.">
        <h2 class="card__brand">${product.Brand.Name}</h2>
        <h3 class="card__name">${product.Name}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>`;
    
}

export default class ProductList {

    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {

        if(qs("#category-name")){
            qs("#category-name").textContent = ": " + this.category.charAt(0).toUpperCase() + this.category.slice(1);
        }

        const list = await this.dataSource.getData(this.category);
        this.renderList(list);

    }

    renderList(list) {
        // const htmlStrings = list.map(productCardTemplate);
        // this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
        renderListWithTemplate(productCardTemplate, this.listElement, list);

    }

}