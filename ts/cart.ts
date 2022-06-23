import { getData, LocalStorageKey, setData } from "./base.js";
import { Product } from "../type/product.js";

const renderCart = () => {
  const cart: Product[] = getData(LocalStorageKey.CART);
  if (cart.length > 0) {
    const htmlCartElements: Element | null =
      document.querySelector('.js-listCart');
    let productCartElement = '';
    cart.forEach((product: Product) => {
      if (product.quantity) {
        productCartElement += `<li id="${product.id}"class="js-cartItem">
      <div class="js-card row">
        <div class="col-3">
          <div class="js-card-image">
            <img
              class="js-image-product"
              src="${product.imageUrl}"
              alt="Imgae-product"
            />
          </div>
          <a href="#" class="js-card-title product">
            <h4 class="js-title-product">${product.name}</h4>
          </a>
        </div>
        <div class="col-2">
        <p>Price</p>
          <span class="js-card-price">${product.price}</span>
        </div>
        <div class="col-2">
          <p>Quanlity</p>
          <button id="js-reduce-${product.id}" class="btn btn-reduce">-</button>
          <span class="js-card-quantity" id="js-quantity-${product.id}">${
          product.quantity
        }</span>
          <button id="js-increase-${
            product.id
          }" class="btn btn-increasing">+</button>
        </div>
        <div class="col-2">
          <p>Total</p>
          <span class="js-card-total" id="total-${product.id}" >${(
          product.price * product.quantity
        ).toFixed(2)}</span>
        </div>
        <div class="col-2">
        <button data-id="${
          product.id
        }" class ="btn btn-remove">Remove</button></div>
      </div>
    </li>`;
      }
    });
    if (htmlCartElements) {
      htmlCartElements.innerHTML += productCartElement;
    }
  } else {
    const totalCart: Element | null = document.querySelector('.js-total');
    const htmlGoBack = `<p>Bạn chưa thêm sản phẩm nào</p>
    <a href="./fashion-home-1.html" class="btn btn-primary">Go Back</a>`;
    if (totalCart) {
      totalCart.innerHTML = htmlGoBack;
    }
  }
  totalProduct();
  handleListenerRemove();
  handleListenerQuantity();
};
export const handleListenerQuantity = () => {
  const cartItem: Product[] = getData(LocalStorageKey.CART);
  cartItem.forEach((product: Product) => {
    const htmlCartItemReduce: HTMLElement | null = document.getElementById(
      `js-reduce-${product.id}`
    );
    const htmlCartItemincrease: HTMLElement | null = document.getElementById(
      `js-increase-${product.id}`
    );
    htmlCartItemReduce?.addEventListener('click', (e: MouseEvent) => {
      updateQuantity(product.id, 'js-reduce');
    });
    htmlCartItemincrease?.addEventListener('click', (e: MouseEvent) => {
      updateQuantity(product.id, 'js-increase');
    });
  });
};
export const updateQuantity = (id: number, action: string) => {
  const cart: Product[] = getData(LocalStorageKey.CART);
  const product: Product | undefined = cart.find((product: Product) => {
    return product.id === id;
  });
  if (product?.quantity) {
    if (action === 'js-reduce') {
      if (product.quantity - 1 > 0) {
        product.quantity -= 1;
      } else {
        return (product.quantity = 0);
      }
    } else {
      product.quantity += 1;
    }
  }
  setData(LocalStorageKey.CART, cart);
  const quantity: HTMLElement | null = document.getElementById(
    `js-quantity-${id}`
  );
  const htmlQuantity = `<span class="js-quantity">${product?.quantity}</span>`;
  if (quantity && product?.quantity) {
    quantity.innerHTML = htmlQuantity;
  }
  let htmlSumTotal = '';
  if (product?.quantity) {
    htmlSumTotal = `<sapn class="js-totals">${(
      product.quantity * product.price
    ).toFixed(2)}</sapn>`;
  }
  const totalIncrease: HTMLElement | null = document.getElementById(
    `total-${id}`
  );
  if (totalIncrease) {
    totalIncrease.innerHTML = htmlSumTotal;
  }
  totalProduct();
};

export const handleListenerRemove = () => {
  const htmlCartItemRemove: HTMLCollectionOf<Element> =
    document.getElementsByClassName('btn-remove');
  const buttons: Element[] = Object.values(htmlCartItemRemove);
  buttons.forEach((button: Element) => {
    const productId: string | null = button.getAttribute('data-id');
    button.addEventListener('click', (e: MouseEventInit) => {
      if (productId) {
        removeProduct(+productId);
      }
    });
  });
};
export const removeProduct = (id: number) => {
  const cart: Product[] = getData(LocalStorageKey.CART);
  const result: Product[] = cart.filter((product: Product) => {
    return +product.id !== +id;
  });
  setData(LocalStorageKey.CART, result);
  const removeElement: HTMLElement | null = document.getElementById(`${id}`);
  if (removeElement) {
    removeElement.remove();
  }
  totalProduct();
};

export const totalProduct = () => {
  const cart: Product[] = getData(LocalStorageKey.CART);
  let total = 0;
  cart.forEach((product: Product) => {
    if (product.quantity) {
      total += product.price * product.quantity;
    }
  });
  const htmlTotals: Element | null = document.querySelector('.total');
  const htmlTotal = `<p class="js-total">TOTAL:${total.toFixed(2)}</p>`;
  if (htmlTotals) {
    htmlTotals.innerHTML = htmlTotal;
  }
};

renderCart();