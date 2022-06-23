var listKeys = {
  todoList: 'todo'
}

function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

function getStorage(key) {
  return JSON.parse(localStorage.getItem(key));
};

var todoElements = document.querySelector('.js-list-todo');

function randomId() {
  var id = Math.random();
  return id;
}
function addTodo() {
  var getContent = document.getElementById('js-input').value;
  var todo = getStorage(listKeys.todoList) || [];
  // var listTodo = JSON.parse(getStrongeItem) || [];
  if (todo) {
    todo.push({
      id: randomId(),
      text: getContent,
    });
  }
  setStorage(listKeys.todoList,todo);
  renderListTodo();
}
function renderListTodo() {
  var todo = getStorage(listKeys.todoList) || {};
  if (todo) {
    var htmlTodo = '';
    todo.forEach(function (element) {
      htmlTodo +=
        "<li id=" +
        element.id +
        ' class="js-list-item">' +
        '<span class="js-content">' +
        element.text +
        '</span><button type="button" js-data-id=' +
        element.id +
        ' class="btn js-btn-remove btn-secondary"><i class="fas fa-backspace"></i></button></li>';
    });
    todoElements.innerHTML = htmlTodo;
  }
  handleListenerRemove();
}
function handleListenerRemove() {
  var htmlTodoItemRemove = document.getElementsByClassName('js-btn-remove');
  var buttonRemove = Object.values(htmlTodoItemRemove);
  buttonRemove.forEach(function (button) {
    var todoId = button.getAttribute('js-data-id');
    button.addEventListener('click', function (e) {
      removeTodo(todoId);
    });
  });
}
function removeTodo(id) {
  var todo = getStorage(listKeys.todoList)|| {};
  var result = todo.filter(function (element) {
    return +element.id !== +id;
  });
  setStorage(listKeys.todoList,result);
  var removeElement = document.getElementById(id);
  if (removeElement) {
    removeElement.remove();
  }
  renderListTodo();
}

var buttonAdd = document.querySelector('.js-btn-add-todo');
buttonAdd.addEventListener('click', function (e) {
  addTodo();
});
renderListTodo();
handleListenerRemove();
