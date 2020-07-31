// selectors
 const TodoInput = document.querySelector(".Todo-input");
const TodoButton = document.querySelector(".Todo-button");
const TodoList = document.querySelector(".Todo-list")

// events listeners
TodoButton.addEventListener("click",addTodo);

TodoList.addEventListener("click" ,deleteCheck);

// functions
function addTodo(event){
event.preventDefault();
const TodoDiv = document.createElement("div");
TodoDiv.classList.add("Todo");

const newTodo = document.createElement("li");
newTodo.innerText = TodoInput.value;
newTodo.classList.add("Todo-item")

TodoDiv.appendChild(newTodo);

const completeButton = document.createElement("button");
completeButton.innerHTML ='<i class = "fas fa-check"></i>';
completeButton.classList.add("complete-btn");
TodoDiv.appendChild(completeButton);

const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
trashButton.classList.add("trash-btn");
TodoDiv.appendChild(trashButton);
TodoList.appendChild(TodoDiv);

TodoInput.value = "";
}
function deleteCheck(e) {
    const item = e.target;
if (item.classList[0] === "trash-btn") {
const Todo = item.parentElement;
Todo.remove();
}
if (item.classList[0] === "complete-btn") {
const Todo = item.parentElement;
Todo.classList.toggle("completed");
}

}


