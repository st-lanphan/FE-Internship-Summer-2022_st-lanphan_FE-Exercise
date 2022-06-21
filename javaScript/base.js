var listKey = {
  productList: "products",
  cartList: "cart",
}
function setData(listKey,data) {
  return window.localStorage.setItem(listKey, JSON.stringify(data));
}

function getData(listKey) {
  var products = window.localStorage.getItem(listKey);
  return JSON.parse(products);
}
