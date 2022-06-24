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
  var todoItem = {
    id: randomId(),
    text: getContent,
  };
  if (todo) {
    todo.push(todoItem);
  }
  setStorage(listKeys.todoList,todo);
  renderTodo(todoItem);
}
function renderTodo(element) {
  var todoItem = document.createElement('li');
  todoItem.classList.add('js-list-item');
  todoItem.id = element.id;
  var spanContent = document.createElement('span');
  spanContent.classList.add('js-content');
  spanContent.innerText = element.text;
  var buttonRemove = document.createElement('button');
  buttonRemove.classList.add('btn', 'js-btn-remove', 'btn-secondary');
  buttonRemove.setAttribute('js-remove-id',element.id);
  buttonRemove.innerHTML = '<i class="fas fa-backspace"></i>';
  buttonRemove.addEventListener('click',function(e) {
    removeTodo(element.id);
  });

  todoItem.appendChild(spanContent);
  todoItem.appendChild(buttonRemove);
  todoElements.appendChild(todoItem);
}
function renderListTodo() {
  var todo = getStorage(listKeys.todoList) || [];
  if(todo) {
    todo.forEach(function(element) {
      renderTodo(element);
    })
  }
}
function removeTodo(id) {
  var todo = getStorage(listKeys.todoList) || {};
  var index = todo.findIndex(function(element) {
    return element.id === id;
  })
  todo.splice(index,1)
  setStorage(listKeys.todoList,todo);
  var removeElement = document.getElementById(id);
  if (removeElement) {
    removeElement.remove();
  }
}

var buttonAdd = document.querySelector('.js-btn-add-todo');
buttonAdd.addEventListener('click', function (e) {
  addTodo();
});
renderListTodo();
