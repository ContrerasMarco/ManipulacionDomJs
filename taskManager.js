const taskForm = document.getElementById("task-form");
const taskList = document.querySelector("#ul_list");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("task-input");

    const tarea = taskInput.value;
    console.log(tarea);

    if (tarea){
    taskList.append(createtaskElement(tarea))
    taskInput.value="";
    }
});

function createtaskElement(tarea){

    const li = document.createElement("li")
    li.textContent = tarea;
    li.append(createButton("❌", "delete-tarea"), createButton("✏️", "editar-tarea"))
    return li;
}

function createButton(text, className){
    const btn =document.createElement("span");
    btn.textContent=text;
    btn.className =className;
    return btn;
}

function createElement (){
    const divNew = document.createElement("div");
    
}