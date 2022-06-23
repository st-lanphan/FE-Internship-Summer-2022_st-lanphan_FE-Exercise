import { LocalStorageKey, getData, setData } from "./base.js";
import { Product } from "../type/product.js";

const initData = () => {
  const data: Product[] = [
    {
      id: 1,
      name: 'T-Shirt Summer Vibes',
      imageUrl: './image/product-1.png',
      salePrice: 119.99,
      price: 130.25,
      discount: 30,
    },
    {
      id: 2,
      name: 'Loose Knit 3/4 Sleeve',
      imageUrl: './image/product-2.png',
      salePrice: 0,
      price: 119.99,
      discount: 0,
    },
    {
      id: 3,
      name: 'Basic Slim Fit T-Shirt',
      imageUrl: './image/product-3.png',
      salePrice: 0,
      price: 79.99,
      discount: 0,
    },
    {
      id: 4,
      name: 'Loose Textured T-Shirt',
      imageUrl: './image/product-4.png',
      salePrice: 0,
      price: 119.99,
      discount: 0,
    },
  ];
  setData(LocalStorageKey.PRODUCTS, data);
};

const renderData = () => {
  // products = [{ name: '', ...}]
  const products: Product[] = getData(LocalStorageKey.PRODUCTS);
  // productListElements = [{...}]
  const productListElement: NodeListOf<Element> =
    document.querySelectorAll('.js-list-products');
  let productElements = '';
  products.forEach((product: Product) => {
    let discountELement = '';
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
              <img class="image-product" src="${product.imageUrl}" alt="Imgae-product"/>
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
            <button  id="js-button-${product.id}"  class="js-btn btn hiden btn-add-cart">Buy</button>
          </div>
        </li>`;
  });
  productListElement.forEach((element: Element) => {
    element.innerHTML = productElements;
  });
  handleListenerButton();
};

export const handleListenerButton = () => {
  const productItem: Product[] = getData(LocalStorageKey.PRODUCTS);
  productItem.forEach((product: Product) => {
    const htmlAddCart: HTMLElement | null = document.getElementById(
      `js-button-${product.id}`
    );
    htmlAddCart?.addEventListener('click', (e: MouseEvent) => {
      listenerButton(product.id);
    });
  });
};

export const listenerButton = (id: number) => {
  //  [{id}]
  const products: Product[] = getData(LocalStorageKey.PRODUCTS);
  const product: Product | undefined = products.find((product: Product) => {
    return product.id === id;
  });
  // lay gio hang hien tai
  const cart: any = getData(LocalStorageKey.CART || '') || [];
  if (cart) {
    const existProduct: Product = cart.find((product: Product) => {
      return product.id === id;
    });
    if (existProduct) {
      existProduct.quantity = existProduct.quantity
        ? existProduct.quantity + 1
        : 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  } else {
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
  const cart: Product[] = getData(LocalStorageKey.CART);
  let counts = 0;
  cart.forEach((product: Product) => {
    counts += product.quantity || 0;
  });
  const countCarts: Element | null = document.querySelector('.js-count-cart');
  const htmlCountCart = `<span class"js-count">${counts}</span>`;
  if (countCarts) {
    countCarts.innerHTML = htmlCountCart;
  }
};
initData();
renderData();
countCart();
