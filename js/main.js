var taskList = new TaskList();
var validation = new Valid();

getLocalStorage();

//Add Task
getEle("addItem").addEventListener("click", function () {
    var newTask = getEle("newTask").value;

    var isValid = true;
    isValid &= validation.checkEmty(
        newTask,
        "notiInput",
        "Vui lòng nhập thông tin"
    );

    if (!isValid) return;

    var id = Math.random();
    var task = new Task(id, newTask, "todo");
    taskList.addTask(task);
    createTable(taskList.arr);
    setLocalStorage();
});


//Delete Task
function deleteTask(id) {
    taskList.deleteTask(id);
    createTable(taskList.arr);
    setLocalStorage();
}


//Change Status
function changeStatus(id) {
    var task = taskList.getTaskById(id);
    task.status = task.status === "todo" ? "completed" : "todo";
    taskList.updateTask(task);
    createTable(taskList.arr);
    setLocalStorage();
}

function createTable(arr) {
    var contentTodo = "";
    var contentCompleted = "";
    getEle("todo").innerHTML = "";
    getEle("completed").innerHTML = "";
    arr.forEach(function (item, index) {
        if (item.status === "todo") {
            contentTodo += renderListLiHtml(item);
            getEle("todo").innerHTML = contentTodo;
        } else if (item.status === "completed") {
            contentCompleted += renderListLiHtml(item);
            getEle("completed").innerHTML = contentCompleted;
        }
    });
}

function renderListLiHtml(item) {
    return `<li>
      <span>${item.taskName}</span>
      <div class="buttons">
        <button
          class="remove"
          onclick="deleteTask(${item.id})"
        >
          <i class="fa fa-trash-alt"></i>
        </button>
        <button
          class="complete"
          onclick="changeStatus(${item.id})"
        >
          <i class="far fa-check-circle"></i>
          <i class="fas fa-check-circle"></i>
        </button>
      </div>
    </li>`;
}

function setLocalStorage() {
    localStorage.setItem("TaskList", JSON.stringify(taskList.arr));
}

function getLocalStorage() {
    if (localStorage.getItem("TaskList")) {
        taskList.arr = JSON.parse(localStorage.getItem("TaskList"));
        createTable(taskList.arr);
    }
}

function getEle(id) {
    return document.getElementById(id);
}
