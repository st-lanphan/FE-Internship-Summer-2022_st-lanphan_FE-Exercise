function initData() {
  const data = [
    {
      id: 1,
      name: "T-Shirt Summer Vibes",
      image_url: "./image/product-1.png",
      salePrice: 119.99,
      price: 130.25,
      discount: 30,
    },
    {
      id: 2,
      name: "Loose Knit 3/4 Sleeve",
      image_url: "./image/product-2.png",
      price: 119.99,
      discount: 0,
    },
    {
      id: 3,
      name: "Basic Slim Fit T-Shirt",
      image_url: "./image/product-3.png",
      price: 79.99,
      discount: 0,
    },
    {
      id: 4,
      name: "Loose Textured T-Shirt",
      image_url: "./image/product-4.png",
      price: 119.99,
      discount: 0,
    },
  ];
  window.localStorage.setItem("products", JSON.stringify(data));
}

function getData() {
  const products = window.localStorage.getItem("products");
  return JSON.parse(products);
}
function renderData() {
  // products = [{ name: '', ...}]
  const products = getData();
  // productListElements = [{...}]
  const productListElements = document.querySelectorAll(".list-products");
  const productElements = products.map((product) => {
    let discountELement = " ";
    if (product.discount > 0) {
      discountELement = `
      <span class="btn badge badge-product">-${product.discount}%</span>
        <span class="description-product description-sale">
          ${product.salePrice}
        </span>
      `;
    }
    const productElement = `<li class="col-3 col-sm-6">
        <div class="card">
          <div class="card-image">
            <img class="image-product" src="${product.image_url}" alt="Imgae-product"/>
          </div>
          <div class="card-content">
            <a href="#" class="card-title product">
              <h4 class="title-product">${product.name}</h4>
            </a>
            <div class="price">
              ${discountELement}
              <span class="card-price">${product.price}</span>
            </div>
          </div>
          <button onclick="listenerButton(${product.id})" class="btn hiden btn-add-cart">Buy</button>
        </div>
      </li>`;
    return productElement;
  });
  productListElements.forEach((element) => {
    productElements.forEach((productElement) => {
      element.innerHTML += productElement;
    });
  });
}

function listenerButton(id) {
  //  [{id}]
  const products = getData();
  const product = products.find((product) => {
    return product.id == id;
  });
  // lay gio hang hien tai
  let cart = window.localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
    let existProduct = cart.find((product) => {
      return product.id == id;
    });
    if (existProduct) {
      existProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  } else {
    cart = [];
    cart.push({
      id: product.id,
      name: product.name,
      image_url: product.image_url,
      salePrice: product.salePrice,
      price: product.price,
      quantity: 1,
    });
  }
  window.localStorage.setItem("cart", JSON.stringify(cart));
  countCart();
}

function countCart() {
  let cart = window.localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
    const countCarts = document.querySelector(".count-cart");
    let countCart = `<span>${cart.length}</span>`;
    countCarts.innerHTML = countCart;
  }
}
initData();
renderData();
countCart();


