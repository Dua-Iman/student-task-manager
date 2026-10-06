console.log("Student Task Manager loaded.");

const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");

let tasks = [];

taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = taskTitle.value;
    const description = taskDescription.value;

    const task = {
        title: title,
        description: description
    };

    tasks.push(task);

    taskTitle.value = "";
    taskDescription.value = "";

    displayTasks(tasks);
});


searchInput.addEventListener("input", function() {

    const searchText = searchInput.value.toLowerCase();

    const filteredTasks = tasks.filter(function(task) {

        return task.title.toLowerCase().includes(searchText) ||
               task.description.toLowerCase().includes(searchText);

    });

    displayTasks(filteredTasks);
});


function displayTasks(taskArray) {

    taskList.innerHTML = "";

    if (taskArray.length === 0) {

        taskList.innerHTML = "<p>No matching tasks found.</p>";

        return;
    }

    taskArray.forEach(function(task) {

        const taskDiv = document.createElement("div");

        taskDiv.innerHTML =
            "<h3>" + task.title + "</h3>" +
            "<p>" + task.description + "</p>";

        taskList.appendChild(taskDiv);
    });
}