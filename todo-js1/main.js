const taskList = document.getElementById("task-list");
const textInput = document.getElementById("text");

function addTask() {
  if (textInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskText = document.createElement("p");
  taskText.innerText = textInput.value;

  const completeBtn = document.createElement("span");
  completeBtn.innerHTML = "✔";
  completeBtn.style.color = "green";
  completeBtn.style.cursor = "pointer";
  completeBtn.onclick = () => {
    taskText.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.style.color = "red";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.onclick = () => {
    taskList.removeChild(taskDiv);
  };

  taskDiv.appendChild(taskText);
  taskDiv.appendChild(completeBtn);
  taskDiv.appendChild(deleteBtn);

  taskList.appendChild(taskDiv);
  textInput.value = "";
}
