// Get elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Form submit event
form.addEventListener('submit', addTask);

// Add task
function addTask(e) {
  e.preventDefault();
  // Create list item
  const li = document.createElement('li');
  li.innerHTML = `<input type="checkbox"> ${input.value} <i class="fa fa-trash"></i>`;
  // Append list item to todo list
  todoList.appendChild(li);
  // Clear input field
  input.value = '';
}

// Mark task as completed/not completed
todoList.addEventListener('change', markCompleted);

function markCompleted(e) {
  if (e.target.tagName === 'INPUT') {
    const li = e.target.parentElement;
    if (e.target.checked) {
