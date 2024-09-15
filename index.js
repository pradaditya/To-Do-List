const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskDisplay = document.querySelector('.task-display');
const emptyMessage = document.getElementById('emptyMessage');

addTaskButton.addEventListener('click', function () {
    const taskValue = taskInput.value.trim();
    if (taskValue === '') {
        alert('Please enter a task');
        return;
    }

    // Create checkbox element
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('task-checkbox');

    // Create task text element
    const taskText = document.createElement('p');
    taskText.classList.add('task-text');
    taskText.textContent = taskValue;

    // Create remove button element
    const removeButton = document.createElement('button');
    removeButton.classList.add('task-remove-button');
    removeButton.innerHTML = `<span class="material-symbols-outlined">
delete
</span>`;

    // Add event listener to remove button
    removeButton.addEventListener('click', function () {
        newTaskDiv.remove();
    });

    // Create task container div
    const newTaskDiv = document.createElement('div');
    newTaskDiv.classList.add('task-item');
    newTaskDiv.appendChild(checkbox);
    newTaskDiv.appendChild(taskText);
    newTaskDiv.appendChild(removeButton);

    // Append new task to task display container
    const taskDisplay = document.querySelector('.task-display');
    taskDisplay.appendChild(newTaskDiv);

    // Clear input field
    taskInput.value = '';
});
