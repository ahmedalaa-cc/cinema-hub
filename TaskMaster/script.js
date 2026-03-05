const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const categoryInput = document.getElementById('category-input');
const priorityInput = document.getElementById('priority-input');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    taskList.innerHTML = ''; 
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.priority} ${task.completed ? 'completed' : ''}`; 
        
        li.innerHTML = `
            <div class="task-info">
                <span class="task-title">${task.title}</span>
                <span class="task-category">${task.category}</span>
            </div>
            <div class="task-actions">
                <button class="complete-btn" onclick="toggleComplete(${index})">
                    ${task.completed ? 'تراجع' : 'إنجاز ✔️'}
                </button>
                <button class="delete-btn" onclick="deleteTask(${index})">حذف ❌</button>
            </div>
        `;
        
        taskList.appendChild(li);
    });
}

taskForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const newTask = {
        title: taskInput.value,
        category: categoryInput.value,
        priority: priorityInput.value,
        completed: false 
    };
    
    tasks.push(newTask); 
    saveData(); 
    renderTasks(); 
    
    taskInput.value = ''; 
});
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveData(); 
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1); 
    saveData(); 
    renderTasks();
}

function saveData() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

renderTasks();