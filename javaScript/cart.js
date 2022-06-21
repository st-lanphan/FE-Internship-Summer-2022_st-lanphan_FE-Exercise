function renderCart() {
  var cart = getData(listKey.cartList);
  if (cart.length > 0) {
    var htmlCartElements = document.querySelectorAll('.listCart');
    var productCartElement = ''; 
    cart.forEach(function(product) {
      productCartElement += `<li id="${product.id}"class="js-cartItem">
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
          <button id="reduce-${product.id}" class="btn btn-reduce">-</button>
          <span class="js-card-quantity" id="quantity-${product.id}">${
        product.quantity
      }</span>
          <button id="increase-${
            product.id
          }" class="btn btn-increasing">+</button>
        </div>
        <div class="col-2">
          <p>Total</p>
          <span class="js-card-total" id="total-${product.id}" >${(
        product.price * product.quantity
      ).toFixed(2)}</span
          >
        </div>
        <div class="col-2">
        <button data-id="${product.id}" class ="btn btn-remove">Remove</button></div>
      </div>
    </li>`;
    })
    htmlCartElements.forEach(function(element) {
      element.innerHTML = productCartElement;
    })
  }
  if (cart.length == 0) {
    var totalCart = document.querySelector('.js-total');
    var htmlGoBack = `<p>Bạn chưa thêm sản phẩm nào</p>
    <a href="./fashion-home-1.html" class="btn btn-primary">Go Back</a>`;
    totalCart.innerHTML = htmlGoBack;
    removeProduct();
  }
}
function handleListenerQuantity() {
  var cartItem = getData(listKey.cartList);
  cartItem.forEach(function (product) {
    var htmlCartItemReduce = document.getElementById(`reduce-${product.id}`);
    var htmlCartItemincrease = document.getElementById(
      `increase-${product.id}`
    );
    htmlCartItemReduce.addEventListener("click", function (e) {
      updateQuantity(product.id, "reduce");
    });
    htmlCartItemincrease.addEventListener("click", function (e) {
      updateQuantity(product.id, "increase");
    });
  });
}
function updateQuantity(id, action) {
  var cart = getData(listKey.cartList);
  var product = cart.find(function (product) {
    return product.id == id;
  });
  if (action === "reduce") {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  } else {
    product.quantity += 1;
  }
  setData(listKey.cartList, cart);
  var quantity = document.getElementById(`quantity-${id}`);
  quantity.innerHTML = product.quantity;
  var sumTotal = (product.quantity * product.price).toFixed(2);
  var totalIncrease = document.getElementById(`total-${id}`);
  totalIncrease.innerHTML = sumTotal;
  totalProduct();
}
function handleListenerRemove() {
  var htmlCartItemRemove = document.getElementsByClassName('btn-remove');
  var buttons = Object.values(htmlCartItemRemove);
  buttons.forEach(function(button) {
    var productId = button.getAttribute('data-id');
    button.addEventListener("click", function (e) {
      removeProduct(productId);
    });
  })
}
function removeProduct(id) {
  var cart = getData(listKey.cartList);
  var result = cart.filter(function (product) {
    return +product.id !== +id;
  });
  setData(listKey.cartList, result);
  var removeElement = document.getElementById(id);
  if (removeElement) {
    removeElement.remove();
  }
  totalProduct();
}

function totalProduct() {
  var cart = getData(listKey.cartList);
  var total = 0;
  cart.forEach(function (product) {
    total += product.price * product.quantity;
  });
  var htmlTotals = document.querySelector('.total');
  var htmlTotal = `<p class="js-total">TOTAL:${total.toFixed(2)}</p>`;
  htmlTotals.innerHTML = htmlTotal;
}
totalProduct();
renderCart();
handleListenerRemove();
handleListenerQuantity();
