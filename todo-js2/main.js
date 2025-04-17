const taskContainer = document.querySelector("ul.tasks");

const taskValue = document.getElementById("task-value");
const addButton = document.getElementById("add-task");

let tasks = [
  {
    id: 1,
    completed: true,
    task: "Learn Javascript Objects",
  },
  {
    id: 2,
    completed: false,
    task: "Create To-Do List",
  },
];

const showTasks = () => {
  tasks.sort((a, b) => a.completed - b.completed);
  taskContainer.innerHTML = "";
  tasks.forEach((task) => {
    const liContainer = document.createElement("li");
    liContainer.classList.add("task");

    const taskLeft = document.createElement("div");
    taskLeft.classList.add("task-left");

    const checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");

    const icon = document.createElement("span");
    icon.classList.add("material-symbols-outlined", "checkbox-icon");
    icon.innerText = "check";

    const para = document.createElement("p");

    para.innerText = task.task;

    if (task.completed) {
      liContainer.classList.add("checked");
      checkbox.classList.add("checked-box");
      para.classList.add("task-para-checked");
    }

    const removeButton = document.createElement("button");
    removeButton.classList.add("removeTask");
    const removeIcon = document.createElement("span");
    removeIcon.classList.add("material-symbols-outlined");
    removeIcon.innerText = "close";
    removeButton.append(removeIcon);

    checkbox.append(icon);
    taskLeft.append(checkbox);
    taskLeft.append(para);
    liContainer.append(taskLeft);
    liContainer.append(removeButton);

    taskContainer.append(liContainer);

    liContainer.addEventListener("click", () => {
      changeTask(task.id);
    });
    removeButton.addEventListener("click", () => {
      removeTask(task.id);
    });
  });
};

showTasks();

addButton.addEventListener("click", () => {
  if (taskValue.value === "") {
    alert("Enter a Task");
  } else {
    tasks.push({
      id: tasks.length + 1,
      completed: false,
      task: taskValue.value,
    });
    console.log(tasks);
    taskValue.value = "";
    showTasks();
  }
});

const changeTask = (id) => {
  tasks.filter((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
      return task;
    }
    return task;
  });
  showTasks();
};
const removeTask = (id) => {
  const newList = tasks.filter((task) => {
    return task.id !== id;
  });

  tasks = newList;
  showTasks();
};
