const taskInput = document.getElementById('task-input');  
const addTaskBtn = document.getElementById('add-task-btn');  
const taskList = document.getElementById('task-list');  
  
let tasks = [];  
  
// Carregar tarefas do localStorage  
if (localStorage.getItem('tasks')) {  
  tasks = JSON.parse(localStorage.getItem('tasks'));  
  renderTaskList();  
}  
  
// Adicionar tarefa  
addTaskBtn.addEventListener('click', () => {  
  const taskText = taskInput.value.trim();  
  if (taskText) {  
   tasks.push({ text: taskText, completed: false });  
   taskInput.value = '';  
   renderTaskList();  
   saveTasksToLocalStorage();  
  }  
});  
  
// Remover tarefa  
taskList.addEventListener('click', (e) => {  
  if (e.target.classList.contains('delete-btn')) {  
   const taskId = e.target.dataset.taskId;  
   tasks = tasks.filter((task, index) => index !== parseInt(taskId));  
   renderTaskList();  
   saveTasksToLocalStorage();  
  }  
});  
  
// Concluir tarefa  
taskList.addEventListener('click', (e) => {  
  if (e.target.classList.contains('complete-btn')) {  
   const taskId = e.target.dataset.taskId;  
   tasks[taskId].completed = !tasks[taskId].completed;  
   renderTaskList();  
   saveTasksToLocalStorage();  
  }  
});  
  
// Renderizar lista de tarefas  
function renderTaskList() {  
  taskList.innerHTML = '';  
  tasks.forEach((task, index) => {  
   const taskElement = document.createElement('li');  
   taskElement.innerHTML = `  
    <span class="${task.completed ? 'completed' : ''}">${task.text}</span>  
    <button class="delete-btn" data-task-id="${index}">Excluir</button>  
    <button class="complete-btn" data-task-id="${index}">Concluir</button>  
   `;  
   taskList.appendChild(taskElement);  
  });  
}  
  
// Salvar tarefas no localStorage  
function saveTasksToLocalStorage() {  
  localStorage.setItem('tasks', JSON.stringify(tasks));  
}
