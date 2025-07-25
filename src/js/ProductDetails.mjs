import { getLocalStorage, setLocalStorage, qs, countTotalCartItems } from "./utils.mjs";

export default class ProductDetails{
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init(){

        // Get product data
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails();

        // add listener to Add to Cart button
        document.getElementById("addToCart").addEventListener("click", this.addProductToCart.bind(this));

    }

    addProductToCart(){

        var productsListCart = getLocalStorage("so-cart") || [];
        productsListCart.push(this.product);
        setLocalStorage("so-cart", productsListCart);
        this.triggerCartAnimation(qs('#addToCart'));
        this.triggerCartAnimation(qs('#cartIcon'));
        countTotalCartItems();

    }

    triggerCartAnimation(element) {

        element.classList.add('bounce');
        element.innerText = "Added to Cart...";
        element.addEventListener('animationend', () => {
            element.classList.remove('bounce');
            element.innerText = "Add to Cart";
        }, { once: true });

    }

    renderProductDetails(){
        
        qs(".product__name").innerText = this.product.Name;
        qs(".product__image").setAttribute('src', this.product.Images.PrimaryLarge);
        qs(".product__image").setAttribute('alt', this.product.Name);
        qs(".product-card__price").innerText =  `$ ${this.product.ListPrice}`;
        qs(".product__color").innerText = this.product.Colors[0].ColorName;
        qs(".product__description").innerHTML = this.product.DescriptionHtmlSimple;
        qs("#addToCart").setAttribute('data-id', this.product.Id);
        
    }
}
