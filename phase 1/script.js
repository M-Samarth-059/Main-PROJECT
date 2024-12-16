const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const completedCount = document.getElementById("completed-count");
const totalTasks = document.getElementById("total-tasks");

let completedTasks = 0;
let totalTaskCount = 0;

// Add a new todo item
addBtn.addEventListener("click", () => {
    const todoText = todoInput.value.trim();
    if (todoText === "") return;

    // Create todo item
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const todoTextElem = document.createElement("p");
    todoTextElem.classList.add("todo-text");
    todoTextElem.textContent = todoText;

    const todoActions = document.createElement("div");
    todoActions.classList.add("todo-actions");

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.innerHTML = "&#10003;";
    completeBtn.addEventListener("click", () => {
        todoItem.classList.toggle("completed");
        if (todoItem.classList.contains("completed")) {
            completedTasks++;
        } else {
            completedTasks--;
        }
        updateStats();
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "&#128465;";
    deleteBtn.addEventListener("click", () => {
        if (todoItem.classList.contains("completed")) {
            completedTasks--;
        }
        totalTaskCount--;
        todoList.removeChild(todoItem);
        updateStats();
    });

    todoActions.appendChild(completeBtn);
    todoActions.appendChild(deleteBtn);
    todoItem.appendChild(todoTextElem);
    todoItem.appendChild(todoActions);
    todoList.appendChild(todoItem);

    // Clear input and update stats
    todoInput.value = "";
    totalTaskCount++;
    updateStats();
});

// Update the stats
function updateStats() {
    completedCount.textContent = completedTasks;
    totalTasks.textContent = totalTaskCount;
}
