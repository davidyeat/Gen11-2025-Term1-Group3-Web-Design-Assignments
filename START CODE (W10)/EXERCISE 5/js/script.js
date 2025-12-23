// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let taskList = [];

// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

// const { createElement } = require("react");

function addItem() {
  // 1- Create a new task
  // TODO
  const task = {
    description: "",
    priority: 0
  };

  //  2- Set the description from the text field
  // TODO
  const descriptionInput = document.getElementById("description");
  const descriptionValue = descriptionInput.value.trim();
  task.description = descriptionValue;

  // 3- Set the priority from select field
  // TODO
  const prioritySelect = document.getElementById("priority");
  const priorityValue = parseInt(prioritySelect.value);
  task.priority = priorityValue;

  // 4- Add the new object to the array
  // TODO
  taskList.push(task);
  displayTasks(taskList);
  descriptionInput.value = "";
}

function displayTasks(tasks){
  const display = document.querySelector(".displaySection");
  display.innerHTML = "";

  // Create new DOM elementss
  tasks.forEach(task => {
    const taskItem = document.createElement('div');
    taskItem.className = "displayItem";
    taskItem.textContent = task.description;

    // Priority color
    if(task.priority === 1){
      taskItem.style.backgroundColor = "red";
    } else {
      taskItem.style.backgroundColor = "gray";
    }

    display.appendChild(taskItem);
  });
}

// Filter Display 
document.getElementById('showPriorityTasks').addEventListener("click", () => {
  const priorityTasks = taskList.filter(element => element.priority === 1);
  displayTasks(priorityTasks);
});

document.getElementById('showNormalTasks').addEventListener("click", () => {
  const normalTasks = taskList.filter(element => element.priority === 0);
  displayTasks(normalTasks);
});

document.getElementById('showAll').addEventListener("click", () => {
  displayTasks(taskList);
});

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
