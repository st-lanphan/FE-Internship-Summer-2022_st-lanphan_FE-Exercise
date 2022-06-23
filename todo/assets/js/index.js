var TodoElements = document.querySelector(".list-todo");
var listTodo = [];

function randomId() {
  var id = Math.random();
  return id;
}
function addTodo() {
  var getContent = document.getElementById("myInput").value;
  console.log(getContent);
  var getStrongeItem = localStorage.getItem("todo");
  var listTodo = JSON.parse(getStrongeItem) || [];
  if (listTodo) {
    listTodo.push ({
        id: randomId(),
        text: getContent
      });
  };
  localStorage.setItem('todo', JSON.stringify(listTodo));
  renderListTodo();
}
function renderListTodo () {
  var todo = JSON.parse(localStorage.getItem("todo"));
  console.log(typeof(todo));
  if(todo) {
    todo.forEach(function(element) {
      htmlTodo =
        '<li class="js-list-item"><spans class="js-content">' +
        element.text +
        '</spans> <button type="button" class="btn js-btn-delete">X</button></li>';
      TodoElements.innerHTML += htmlTodo;
    });
  }
}
function removeTodo(id) {
  var todo = JSON.parse(localStorage.getItem("todo"));
  var result = todo.filter(function (element) {
    return +element.id !== +id;
  });
  console.log(result);
  // localStorage.setItem("todo",result);
  // var removeElement = document.getElementById(id);
  // if (removeElement) {
  //   removeElement.remove();
  // }
  // todo.forEach(function(element) {
  //   if(element === id) {
  //     todo.splic
  //   }
  // })
}


var buttonAdd = document.querySelector(".btn-add-todo");
buttonAdd.addEventListener("click", function (e) {
  addTodo();
});
renderListTodo();
removeTodo();
