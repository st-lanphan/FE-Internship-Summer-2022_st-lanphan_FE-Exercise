import { LocalStorageKey, getData, setData } from "./base.js";
export const renderData = () => {
    // products = [{ name: '', ...}]
    const products = getData(LocalStorageKey.PRODUCTS);
    // productListElements = [{...}]
    const productListElement = document.querySelectorAll(".list-products");
    let productElements = "";
    products.forEach((product) => {
        let discountELement = "";
        if (product.discount > 0) {
            discountELement = `
        <span class="js-btn btn badge badge-product">-${product.discount}%</span>
          <span class="js-description description-product description-sale">
            ${product.salePrice}
          </span>
        `;
        }
        productElements += `<li class="col-3 col-sm-6">
          <div class="js-card card">
            <div class="js-image card-image">
              <img class="image-product" src="${product.image_url}" alt="Imgae-product"/>
            </div>
            <div class="js-card-content card-content">
              <a href="#" class="card-title product">
                <h4 class="title-product">${product.name}</h4>
              </a>
              <div class="js-price price">
                ${discountELement}
                <span class="card-price">${product.price}</span>
              </div>
            </div>
            <button  id="button-${product.id}"  class="js-btn btn hiden btn-add-cart">Buy</button>
          </div>
        </li>`;
    });
    productListElement.forEach((element) => {
        element.innerHTML = productElements;
    });
    handleListenerButton();
};
export const handleListenerButton = () => {
    const productItem = getData(LocalStorageKey.PRODUCTS);
    productItem.forEach((product) => {
        const htmlAddCart = document.getElementById(`button-${product.id}`);
        htmlAddCart?.addEventListener("click", (e) => {
            listenerButton(product.id);
        });
    });
};
export const listenerButton = (id) => {
    //  [{id}]
    const products = getData(LocalStorageKey.PRODUCTS);
    let product = products.find((product) => {
        return product.id == id;
    });
    // lay gio hang hien tai
    const cart = JSON.parse(localStorage.getItem("cart") || "") || [];
    if (cart) {
        let existProduct = cart.find((product) => {
            return product.id == id;
        });
        if (existProduct) {
            existProduct.quantity = existProduct.quantity
                ? existProduct.quantity + 1
                : 1;
        }
        else {
            cart.push({ ...product, quantity: 1 });
        }
    }
    else {
        // cart = [];
        if (product) {
            cart.push({
                ...product,
                quantity: 1,
            });
        }
    }
    setData(LocalStorageKey.CART, cart);
    countCart();
};
export const countCart = () => {
    let cart = getData(LocalStorageKey.CART);
    let counts = 0;
    cart.forEach((product) => {
        counts += product.quantity || 0;
    });
    const countCarts = document.querySelector(".count-cart");
    const countCart = `<span >${counts}</span>`;
    if (countCarts) {
        countCarts.innerHTML = countCart;
    }
};
