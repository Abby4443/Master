// To-Do List - Add New Task
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const todoList = document.querySelector('.todo-list');

addTaskBtn.addEventListener('click', () => {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox"> ${newTask}`;
    todoList.appendChild(listItem);
    newTaskInput.value = '';
  }
});