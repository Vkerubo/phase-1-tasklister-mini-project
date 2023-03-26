/*document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
*/

// Define global variables
const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');

// Listen for submit event on form
form.addEventListener('submit', function(event) {
  // Prevent default form behavior
  event.preventDefault();
  // Get input value
  const input = document.querySelector('#new-task-description');
  const inputValue = input.value;
  // Create new task list item
  const taskItem = document.createElement('li');
  taskItem.innerText = inputValue;
  // Add task to list
  taskList.appendChild(taskItem);
  // Reset input value
  input.value = '';
});

// Stretch Deliverable: Delete function
taskList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }

  
});
