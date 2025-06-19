function addTask()
 {
    var input = document.getElementById("taskInput");
    var text = input.value ;
  
    if (text === "") 
    {
      alert("Please enter a task!");
      return;
    }
  
    var todoList = document.getElementById("todo-list");
    var taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `<input type="checkbox"> ${text}`
    todoList.appendChild(taskItem);

    
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
        deleteButton.textContent = "x";
        deleteButton.onclick = function() 
        {
            todoList.removeChild(taskItem);
    
        };       
        taskItem.appendChild(deleteButton);

    input.value = "";

  var timer = document.createElement("span");
  timer.classList.add("timer");
  var date = new Date();
  timer.textContent = " Added on: " + date.toLocaleString(); 
  taskItem.appendChild(timer);

 
  }
