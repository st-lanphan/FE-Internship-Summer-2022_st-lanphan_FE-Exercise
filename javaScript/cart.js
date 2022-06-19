function getData() {
  const carts = window.localStorage.getItem("cart");
  return JSON.parse(carts);
}
function renderCart() {
  let cart = getData();
  if (cart) {
    const containerCart = document.querySelector(".container");
    const ulContainers = `<ul class="listCart"></ul>`;
    containerCart.innerHTML += ulContainers;
    const ulContainer = document.querySelectorAll(".listCart");
    const productElements = cart.map((product) => {
      const productCartElement = `<li id="${product.id}"class="js-cartItem">
      <div class="js-card row">
        <div class="col-3">
          <div class="js-card-image">
            <img
              class="js-image-product"
              src="${product.image_url}"
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
          <button onclick="reduce(${
            product.id
          })" class="btn btn-reduce">-</button>
          <span class="js-card-quantity">${product.quantity}</span>
          <button onclick="increase(${
            product.id
          })" class="btn btn-increasing">+</button>
        </div>
        <div class="col-2">
          <p>Total</p>
          <span class="js-card-total">${parseInt(
            product.price * product.quantity
          )}</span
          >
        </div>
        <div class="col-2">
        <button onclick="removeProduct(${
          product.id
        })" class ="btn btn-remove">Remove</button></div>
      </div>
    </li>`;
      return productCartElement;
    });
    ulContainer.forEach((element) => {
      productElements.forEach((productCartElement) => {
        element.innerHTML += productCartElement;
      });
    });
  }
}

function reduce(id) {
  const cart = getData();
  const product = cart.find((product) => {
    return product.id == id;
  });
  product.quantity -= 1;
  if (product.quantity < 0) {
    return (product.quantity = 0);
  }
  window.localStorage.setItem("cart", product);
  window.localStorage.setItem("cart", JSON.stringify(cart));
    const buttonReduce = document.querySelector(".js-card-quantity");
  let productQuantity = `<span class="js-card-quantity">${product.quantity}</span>`;
  const productsTotal = document.querySelector(".js-card-total");
  let productTotal = `<span class="js-card-total">${parseInt(
    product.price * product.quantity)}</span>`
  productsTotal.innerHTML = productTotal;
  buttonReduce.innerHTML = productQuantity;
  totalProduct();
}
function increase(id) {
  const cart = getData();
  const product = cart.find((product) => {
    return product.id == id;
  });
  product.quantity += 1;
  window.localStorage.setItem("cart", product);
  window.localStorage.setItem("cart", JSON.stringify(cart));
  let buttonReduce = document.querySelectorAll(".js-card-quantity");
  let productQuantity = `<span class="js-card-quantity">${product.quantity}</span>`;
  buttonReduce.innerHTML = productQuantity;
  const productsTotal = document.querySelector(".js-card-total");
  let productTotal = `<span class="js-card-total">${parseInt(
    product.price * product.quantity)}</span>`
  productsTotal.innerHTML = productTotal;
  totalProduct();

}
function removeProduct(id) {
  let cart = getData();
  const indexProduct = cart.findIndex((product) => {
    return product.id = id;
  });
  const product = cart.find((product) => {
    return product.id = id;
  });
  cart.splice(indexProduct,1)
  window.localStorage.setItem("cart",JSON.stringify(cart));

  let deleteElement = document.getElementById(product.id);
  deleteElement.remove();
  totalProduct();
}

function totalProduct () {
  const cart = getData();
  let total = 0;
  cart.forEach((product) => {
    total += parseInt(product.price * product.quantity)  
  })

  const htmlTotals = document.querySelector(".total");
  let htmlTotal = `<p class="js-total">TOTAL:${total}</p>`;
  htmlTotals.innerHTML = htmlTotal;
  
}

totalProduct();
getData();
renderCart();

