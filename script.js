let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">
                ${task.text}
            </span>

            <div class="task-buttons">
                <button onclick="completeTask(${index})">Done</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function addTask(){
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";

    displayTasks();
}

function completeTask(index){
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

function deleteTask(index){
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

displayTasks();
console.log("Todo App Loaded");