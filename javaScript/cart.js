function getData() {
  var carts = window.localStorage.getItem("cart");
  return JSON.parse(carts);
}
function renderCart() {
  var cart = getData();
  if (cart.length > 0) {
    var containerCart = document.querySelector(".container");
    var ulContainers = `<ul class="listCart"></ul>`;
    containerCart.innerHTML += ulContainers;
    var ulContainer = document.querySelectorAll(".listCart");
    var productElements = cart.map(function (product) {
      var productCartElement = `<li id="${product.id}"class="js-cartItem">
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
          <span class="js-card-quantity" id="quanity-${product.id}">${
        product.quantity
      }</span>
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
    ulContainer.forEach(function (element) {
      productElements.forEach(function (productCartElement) {
        element.innerHTML += productCartElement;
      });
    });
  }
  if (cart.length == 0) {
    var totalCart = document.querySelector(".js-total");
    var htmlGoBack = `<p>Bạn chưa thêm sản phẩm nào</p>
    <a href="./fashion-home-1.html" class="btn btn-primary">Go Back</a>`;
    totalCart.innerHTML = htmlGoBack;
    removeProduct();
  }
}

function reduce(id) {
  var cart = getData();
  var product = cart.find(function (product) {
    return product.id == id;
  });
  product.quantity -= 1;
  if (product.quantity < 0) {
    return (product.quantity = 0);
  }
  setData(listKey.cartList, product);
  setData(listKey.cartList, cart);
  var clickReduce = document.getElementById(`quanity-${id}`);
  clickReduce.innerHTML = product.quantity;
  var sumTotal = (product.quantity * product.price).toFixed(2);
  var totalIncrease = document.getElementById(`total-${id}`);
  totalIncrease.innerHTML = sumTotal;
  totalProduct();
}
function increase(id) {
  var cart = getData();
  var product = cart.find(function (product) {
    return product.id == id;
  });
  product.quantity += 1;
  setData(listKey.cartList, product);
  setData(listKey.cartList, cart);
  var clickReduce = document.getElementById(`quanity-${id}`);
  clickReduce.innerHTML = product.quantity;
  var sumTotal = (product.quantity * product.price).toFixed(2);
  var totalIncrease = document.getElementById(`total-${id}`);
  totalIncrease.innerHTML = sumTotal;
  totalProduct();
}
function removeProduct(id) {
  var cart = getData();
  var indexProduct = cart.findIndex(function (product) {
    return (product.id = id);
  });
  var product = cart.find(function (product) {
    return (product.id = id);
  });
  cart.splice(indexProduct, 1);
  setData(listKey.cartList, cart);
  var devareElement = document.getElementById(product.id);
  devareElement.remove();
  totalProduct();
}

function totalProduct() {
  var cart = getData();
  var total = 0;
  cart.forEach(function (product) {
    total += product.price * product.quantity;
  });
  var htmlTotals = document.querySelector(".total");
  var htmlTotal = `<p class="js-total">TOTAL:${total.toFixed(2)}</p>`;
  htmlTotals.innerHTML = htmlTotal;
}
totalProduct();
getData();
renderCart();
