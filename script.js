const API_URL = "https://jsonplaceholder.typicode.com/todos/1"
async function fetchData () {
  const res = await fetch(API_URL);
  const data = await res.json();
  console.log(data);
}
fetchData();


// fetch(API_URL)
//   .then(data => data.json())
//   .then(res => {
//     console.log(res);
//   })

// const nav = document.querySelectorAll(".nav-title a");

navItemElements[1].onclick = function (e) {
  this.classList.toggle("red");
  console.log("hi");
}

const productList = document.getElementById(`foryou-list`);
productList.innerHTML += ` s<li class="col-3 foryou-item">
<div class="card">
  <span class="card-discount discount-product">-30%</span>
  <div class="card-image">
    <img
      class="image-product"
      src="./image/image.png"
      alt="T-Shirt"
    />
  </div>
  <div class="card-content">
    <a href="#" class="card-title product">
      <h4 class="title-product">T-Shirt Summer Vibes</h4>
    </a>
    <div class="price">
      <span class="description-product"> $89.99 </span>
      <span class="card-price">$119.99</span>
    </div>
  </div>
</div>
</li>
<li class="col-3 foryou-item">
<div class="card">
  <div class="card-image">
    <img
      class="image-product"
      src="./image/image-2.png"
      alt="image-product"
    />
  </div>
  <div class="card-content">
    <h4 class="title-product">Loose Knit 3/4 Sleeve</h4>

    <span class="description-product"> $119.99 </span>
  </div>
</div>
</li>
<li class="col-3 foryou-item">
<div class="card">
  <div class="card-image">
    <img
      class="image-product"
      src="./image/image-3.png"
      alt="image-product"
    />
  </div>
  <div class="card-content">
    <a href="#" class="card-title">
      <h4 class="title-product">Loose Knit 3/4 Sleeve</h4>
    </a>
    <span class="description-product"> $119.99 </span>
  </div>
</div>
</li>
<li class="col-3 foryou-item">
<div class="card">
  <div class="card-image">
    <img
      class="image-product"
      src="./image/image-4.png"
      alt="image-product"
    />
  </div>
  <div class="card-content">
    <a href="#" class="card-title">
      <h4 class="title-product">Loose Textured T-Shirt</h4>
    </a>
    <span class="description-product"> $119.99 </span>
  </div>
</div>
</li>`



