const productList = document.querySelectorAll(".list-products");
console.log(productList);
eventListeners();
function eventListeners() {
  window.addEventListener("DOMContentLoaded", () => {
    renderData();
  });
}

function renderData() {
  fetch("./javaScript/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let html = "";
      data.forEach((product) => {
        console.log(product.discount);
        if (product.discount <= 0) {
          html += `  <li class="col-3 col-sm-6 foryou-item">
        <div class="card">
          <div class="card-image">
            <img
              class="image-product"
              src="${product.image_url}"
              alt="Imgae-product"
            />
          </div>
          <div class="card-content">
            <a href="#" class="card-title product">
              <h4 class="title-product">${product.name}</h4>
            </a>
            <div class="price">
              <span class="card-price">${product.price}</span>
            </div>
          </div>
        </div>
      </li>`;
        } else {
          html += `  <li class="col-3 col-sm-6 foryou-item">
          <div class="card">
            <div class="card-image">
              <img
                class="image-product"
                src="${product.image_url}"
                alt="Imgae-product"
              />
            </div>
            <div class="card-content">
              <span class="btn badge badge-product">${product.discount}</span>
              <a href="#" class="card-title product">
                <h4 class="title-product">${product.name}</h4>
              </a>
              <div class="price">
                <span class="description-product description-sale">
                  ${product.salePrice}
                </span>
                <span class="card-price">${product.price}</span>
              </div>
            </div>
          </div>
        </li>`;
        }
      });
      productList.forEach((product) => {
        product.innerHTML += html;
      }) 
    });
}
