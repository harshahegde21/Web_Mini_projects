let maindiv = document.getElementById("main-container");
let inputbar = document.querySelector("#addtask-in");
let addBtn = document.querySelector("#add-btn");

function addTask() {
  let taskPara = document.createElement("p");
  let taskdiv = document.createElement("div");
  let checkbox = document.createElement("input");
  let delbtn = document.createElement("button");
  taskdiv.appendChild(delbtn);
  delbtn.textContent = "Delete";
  delbtn.style.backgroundColor = "#FF7F7F";
  delbtn.style.fontFamily = "'Gill Sans'";
  delbtn.style.width = "50px";
  delbtn.style.borderRadius = "20px";
  delbtn.style.top = 0;
  delbtn.style.right = 0;
  taskdiv.style.position = "relative";
  delbtn.style.position = "absolute";
  let counter = 0;
  if (!inputbar.value) {
    alert("Cant Add empty Task");
    return;
  }
  checkbox.type = "checkbox";
  taskdiv.style.gap = "10px";
  taskdiv.style.marginTop = "10px";
  taskdiv.style.width = "25rem";
  taskPara.style.fontFamily = "'Gill Sans'";
  taskdiv.appendChild(checkbox);
  taskdiv.style.display = "flex";
  taskdiv.style.borderRadius = "10px";
  taskdiv.style.position = "relative";
  checkbox.style.marginTop = "6px";
  taskdiv.style.left = "60px";
  checkbox.style.borderRadius = "50px";
  checkbox.style.padding = "5px";
  taskdiv.style.backgroundColor = "#F0F0F0";
  taskdiv.appendChild(taskPara);
  taskPara.textContent = inputbar.value;
  taskPara.textContent;
  maindiv.appendChild(taskdiv);
  inputbar.value = "";
  delbtn.addEventListener("click", () => {
    maindiv.removeChild(taskdiv);
  });
  checkbox.addEventListener("click", () => {
    counter++;
    if (counter % 2 != 0) taskPara.style.textDecoration = "line-through";
    else {
      taskPara.style.textDecoration = "none";
    }
  });
}
addBtn.addEventListener("click", () => {
  addTask();
});
