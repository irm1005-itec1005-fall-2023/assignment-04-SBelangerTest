function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.classList.add('task-item');
  
      // Create grid container
      const gridContainer = document.createElement('div');
      gridContainer.style.display = 'grid';
      gridContainer.style.gridTemplateColumns = '3fr 97fr 0.05fr'; // Three columns: checkbox, task text, remove button
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', completeTask);
  
      const taskText = document.createElement('span');
      taskText.textContent = taskInput.value;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = '×';
      removeButton.classList.add('removeButton');
      removeButton.addEventListener('click', removeTask);
  
      // Append elements to the grid container
      gridContainer.appendChild(checkbox);
      gridContainer.appendChild(taskText);
      gridContainer.appendChild(removeButton);
  
      li.appendChild(gridContainer);
  
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }
  
  function completeTask() {
    const taskList = document.getElementById('taskList');
    const completedList = document.getElementById('completedList');
  
    const taskItem = this.parentNode.parentNode;
    taskItem.classList.toggle('completed');
  
    if (taskItem.classList.contains('completed')) {
      const completedLi = document.createElement('li');
      completedLi.classList.add('task-item');
  
      // Create grid container
      const gridContainer = document.createElement('div');
      gridContainer.style.display = 'grid';
      gridContainer.style.gridTemplateColumns = '3fr 97fr 0.05fr'; // Three columns: checkbox, task text, remove button
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = true; // The checkbox is checked for completed tasks
      checkbox.addEventListener('change', completeTask);
  
      const taskText = document.createElement('span');
      taskText.textContent = taskItem.querySelector('span').textContent; // Copy task text
  
      const removeButton = document.createElement('button');
      removeButton.textContent = '×'; // '×' as the text content
      removeButton.classList.add('removeButton');
      removeButton.addEventListener('click', removeTask);
  
      // Append elements to the grid container
      gridContainer.appendChild(checkbox);
      gridContainer.appendChild(taskText);
      gridContainer.appendChild(removeButton);
  
      completedLi.appendChild(gridContainer);
  
      completedList.appendChild(completedLi);
      taskList.removeChild(taskItem); // Remove task from taskList
    } else {
      taskList.removeChild(taskItem); // Remove task from taskList
    }
  }
  
  function removeTask() {
    const taskList = document.getElementById('taskList');
    const completedList = document.getElementById('completedList');
    const taskItem = this.parentNode.parentNode;
  
    if (taskItem.parentNode === completedList) {
      completedList.removeChild(taskItem);
    } else {
      taskList.removeChild(taskItem);
    }
  }
  
  function removeCompletedTasks() {
    const completedList = document.getElementById('completedList');
    completedList.innerHTML = '';
  }
  