function getData() {
  const carts = window.localStorage.getItem("cart");
  return JSON.parse(carts);
}
function renderCart() {
  let cart = getData();
  if (cart) {
    console.log(cart.lenght);
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
          <span class="js-card-quantity" id="quanity-${product.id}">${product.quantity}</span>
          <button onclick="increase(${
            product.id
          })" class="btn btn-increasing">+</button>
        </div>
        <div class="col-2">
          <p>Total</p>
          <span class="js-card-total" id="total-${product.id}" >${(
            product.price * product.quantity
          ).toFixed(2)}</span
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

  // JSON.parse(cart);
  // if(cart.lenght === 0) {
  //   const containerCart = document.querySelector(".container");
  //   const ulContainers = `<p class="listCart">Go Back</p>`;
  //   containerCart.innerHTML += ulContainers;

  // }
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
  let clickReduce = document.getElementById(`quanity-${id}`);
  clickReduce.innerHTML = product.quantity;
  let sumTotal = (product.quantity * product.price).toFixed(2);
  let totalIncrease = document.getElementById(`total-${id}`);
  totalIncrease.innerHTML = sumTotal;
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
  let clickReduce = document.getElementById(`quanity-${id}`);
  clickReduce.innerHTML = product.quantity;
  let sumTotal = (product.quantity * product.price).toFixed(2);
  let totalIncrease = document.getElementById(`total-${id}`);
  totalIncrease.innerHTML = sumTotal;
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

