console.log("Hello from to do");


function addTask(){
    let taskInput = document.querySelector("#taskName");
    let task = taskInput.value;


    if(task == ""){
        alert("Please enter a task name!");
    }
    else{
        console.log(task);
        let taskList = document.querySelector(".taskList");
        const newTask = document.createElement("li");
        newTask.innerText = task;
        taskList.appendChild(newTask);

        taskInput.value = "";

    }
}