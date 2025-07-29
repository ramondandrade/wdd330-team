import { renderListWithTemplate, getLocalStorage, setLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
    <a href="/product_pages/index.html?product=${item.Id}" class="cart-card__image">
        <img
        src="${item.Images.PrimaryMedium}"
        alt="${item.Name}"
        />
    </a>
    <a href="/product_pages/index.html?product=${item.Id}">
        <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
    <button class="remove-item" data-id="${item.Id}" style="margin-left: 10px; color: red;">X</button>
    </li>`;

  return newItem;
}

export default class ShoppingCart {

    constructor(listElement) {
        this.listElement = listElement;
    }

    async init() {

        const list = await getLocalStorage("so-cart");
        this.renderList(list);

        // Remove
        document.querySelectorAll(".remove-item").forEach((button) => {
            button.addEventListener("click", (event) => {
            const id = event.target.getAttribute("data-id");
            this.removeFromCart(id);
            });
        });

    }

    renderList(list) {
        renderListWithTemplate(cartItemTemplate, this.listElement, list, "afterbegin", true);
    }

    removeFromCart(id) {
        let cart = JSON.parse(localStorage.getItem("so-cart")) || [];
        const updatedCart = cart.filter((item) => item.Id !== id);
        setLocalStorage("so-cart", updatedCart);
        this.renderList(updatedCart);
    }


}

