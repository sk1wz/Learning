const todoText = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');
const checker = document.getElementById('checker');

todoButton.addEventListener('click', addTask);
window.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
  if (todoText.value !== "") {
    const todoBody = document.createElement('div');
    const todoBodyText = document.createElement('span');
    const todoDelete = document.createElement('button');

    todoBody.classList.add('todo-body');
    todoBodyText.classList.add('todo-body-text');
    todoDelete.classList.add('todo-delete');

    todoBodyText.textContent = todoText.value;
    todoDelete.textContent = 'X';

    todoList.appendChild(todoBody);
    todoBody.appendChild(todoBodyText);
    todoBody.appendChild(todoDelete);

    todoText.value = '';

    todoDelete.addEventListener('click', () => {
      todoBody.remove();
      saveTasks();
    });
    todoText.style.border = "none";
    saveTasks();
  } else {
    todoText.style.border = "1px solid red";
    console.log('Error: NO TEXT');
  }
}

function saveTasks() {
  const tasks = todoList.innerHTML;
  localStorage.setItem('tasks', tasks);
}

function loadTasks() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    todoList.innerHTML = savedTasks;
    const todoDeleteButtons = document.getElementsByClassName('todo-delete');
    Array.from(todoDeleteButtons).forEach(button => {
      button.addEventListener('click', () => {
        button.parentElement.remove();
        saveTasks();
      });
    });
  }
}