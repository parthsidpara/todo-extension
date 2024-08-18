document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('close-button').addEventListener('click', closePopup);
    document.getElementById('add-task-btn').addEventListener('click', addTask);
    
    // Add event delegation for all task actions (claude)
    document.getElementById('all-tasks').addEventListener('click', handleTaskActions);
});

function closePopup(){
    console.log("Closing popup");
    window.close();
}

function addTask(){
    console.log("Adding new task");
    const taskValue = document.getElementById("task-input-field").value;

    if (taskValue.trim() === '') {
        alert('Enter task');
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-card");
    taskDiv.innerHTML = `
        <p class="whatisTask">${taskValue}</p>
        <div class='btn-container'>
            <button class="task-card-btn delete-task-btn">Delete</button>
            <button class="task-card-btn edit-task-btn">Edit</button>
        </div>`;
    document.getElementById("all-tasks").appendChild(taskDiv);

    document.getElementById("task-input-field").value = "";
}

function handleTaskActions(event) {
    // console.log("Task action", event.target);
    const target = event.target;
    
    // check class
    if (target.classList.contains('delete-task-btn')) {
        console.log("Deleted the task");
        const taskCard = target.closest('.task-card');
        if (taskCard) {
            console.log("Removing task card", taskCard);
            taskCard.remove();
        } else {
            console.log("Could not find parent task card");
        }
    } else if (target.classList.contains('edit-task-btn')) {
        console.log("Edit task");
        const taskCard = target.closest('.task-card');
        const whatisTask = taskCard.querySelector('.whatisTask');
        const newTask = prompt('Edit prompt:', whatisTask.innerText);
        if (newTask.trim() === '') {
            alert('Enter task');
            return;
        }else{
            whatisTask.innerText = newTask;
        }
    }
}