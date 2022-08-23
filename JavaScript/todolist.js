import { readTodo, writeTodo, searchUser } from "./lib/database.js";
import showClock from "./clock.js";


const onSubmit = (event) => {
    console.log("onTodoSubmit");
    event.preventDefault();

    const todoContent = document.querySelector("#todo-input");
    // 로컬저장소에 데이터 쓰기
    addTodo(todoContent.value);
    todoContent.value = "";
}

const paintTodoList = () => {
    const todoList = document.querySelector("#todo-list");
    const userID = searchUser();

    todoList.innerHTML = "";

    let todos = readTodo(userID);
    todos.map(todo => {
        const listItem = document.createElement("li");

        const checkBox = document.createElement("input");
        checkBox.type = 'checkbox';
        checkBox.addEventListener("click", checkTodo);

        const content = document.createElement("span");
        content.innerText = todo;

        const removeButton = document.createElement("button");
        removeButton.innerText = "❌";
        removeButton.addEventListener("click", removeTodo);

        listItem.appendChild(checkBox);
        listItem.appendChild(content);
        listItem.appendChild(removeButton);
        todoList.appendChild(listItem)
    });
}
/*
    local storage 저장형태
    key : 이메일
    value :[todo]
*/


const addTodo = (todo) => {
    const userID = searchUser();
    let todos = readTodo(userID);

    const newTodos = todos.concat(todo);
    writeTodo(userID, newTodos);
    paintTodoList();
}

const removeTodo = (event) => {
    const li = event.target.parentElement;
    const span = li.children[1];

    const userID = searchUser();
    let todos = readTodo(userID);
    todos = todos.filter((todo) => todo !== span.innerText);

    li.remove();
    writeTodo(userID, todos);
    paintTodoList();
}

const checkTodo = (event) => {
    const isCheck = event.target.checked;
    const li = event.target.parentElement;
    const span = li.children[1];

    if (isCheck) span.classList.add("checked");
    else span.classList.remove("checked");
}


export default () => {

    const todoInputForm = document.querySelector("#todo-input-form");

    showClock();
    paintTodoList();
    todoInputForm.addEventListener("submit", onSubmit);
};
