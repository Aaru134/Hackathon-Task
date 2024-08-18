// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create task item
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Add delete functionality
    li.querySelector('.delete-btn').addEventListener('click', () => {
        taskList.removeChild(li);
    });

    // Append task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);

// Allow "Enter" key to add tasks
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});