const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    // localStorage.setItem("todos", toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event){
    // console.log(event);
    const li = event.target.parentElement;
    li.remove();
    // toDo.id는 int, li.id는 string 형태
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos(toDos);
     
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    // 받은 object에서 id값
    li.id = newTodo.id;
    const span = document.createElement("span");
    // 받은 object에서 text값
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✔";
    button.classList.add("todoBtn");
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
 
function handleToDoSubmit(event){
    event.preventDefault();
    // console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    // ID를 가지는 object로 만들어줌
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    // object를 array에 저장
    toDos.push(newTodoObj);
    // 받은 값을 인자로 넘겨줌
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null ){
    // 이전 ToDo 복원
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);

}