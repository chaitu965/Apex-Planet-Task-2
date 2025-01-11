// JavaScript Form Validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Check for empty fields
    if (!name || !email || !message) {
      alert('Please fill out all fields!');
      return;
    }
  
    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address!');
      return;
    }
  
    alert('Form submitted successfully!');
  });
  
  // JavaScript for To-Do List
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  
  addButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.textContent = taskText;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };
  
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = ''; // Clear the input field
  });
  