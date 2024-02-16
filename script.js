function addTask() {
  const taskName = document.getElementById("taskName").value;
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;

  if (!taskName || !dueDate) {
    alert("Please fill in all fields");
    return;
  }

  const taskList = document.getElementById("tasks");

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
        <span>${taskName} <br>
        Due: ${dueDate} </span>
        <div class="task-actions">
            <button class="delete" onclick="deleteTask(this)">Delete</button>
            <button class="complete" onclick="completeTask(this)">Complete</button>
        </div>
    `;

  let priorityColor;
  switch (priority) {
    case "low":
      priorityColor = "rgba(255, 255, 0, 0.4)";
      break;
    case "medium":
      priorityColor = "rgba(255, 165, 0, 0.4)";
      break;
    case "high":
      priorityColor = "rgba(255, 0, 0, 0.4)";
      break;
    default:
      priorityColor = "transparent";
  }

  taskItem.style.backgroundColor = priorityColor;
  taskList.appendChild(taskItem);
  document.getElementById("taskName").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("priority").value = "low";
}

function deleteTask(button) {
  const taskItem = button.closest("li");
  taskItem.remove();
}

function completeTask(button) {
  const taskItem = button.closest("li");
  taskItem.classList.add("completed");
  if (taskItem.classList.contains("completed")) {
    taskItem.style.backgroundColor = "transparent";
  }
  button.remove();
}
