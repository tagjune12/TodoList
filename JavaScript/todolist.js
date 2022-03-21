import { readData, writeData } from "./lib/database.js";

const todoInputForm = document.querySelector("#todo-input-form");
const todoContent = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let userEmail = "";

const onSubmit = (event) => {
    console.log("onTodoSubmit");
    event.preventDefault();

    // 로컬저장소에 데이터 쓰기
    addTodo(todoContent.value);
    todoContent.value = "";
}


const showTodoList = (email = "") => {
    console.log("showTodoList:", email);
    let todos = [];
    // 로그인시
    if (email !== "") {
        userEmail = email;
        todos = readData(userEmail);
        console.log(todos);
    }

    todos = readData(userEmail);

    if (todos !== null && (todoList.children.length === 0)) {
        // todoList 화면에 표시
        let todoListItems = [];
        todos.forEach(value => {
            const listItem = document.createElement("li");

            const checkBox = document.createElement("input");
            checkBox.type = 'checkbox';
            checkBox.addEventListener("click", checkTodo);

            const content = document.createElement("span");
            content.innerText = value;

            const removeButton = document.createElement("button");
            removeButton.innerText = "❌";
            removeButton.addEventListener("click", removeTodo);

            listItem.appendChild(checkBox);
            listItem.appendChild(content);
            listItem.appendChild(removeButton);

            todoListItems.push(listItem);
        });

        todoListItems.forEach(item => todoList.appendChild(item));
    }
}
/*
    local storage 저장형태
    key : 이메일
    value : Array
*/


const addTodo = (todo) => {
    let todos = readData(userEmail);
    if (todos === null) {
        todos = [];
    }
    const newTodos = todos.concat(todo);
    writeData(userEmail, newTodos);
}

const removeTodo = (event) => {
    const li = event.target.parentElement;
    const span = li.children[1];

    todos = todos.filter((value) => value !== span.innerText);
    li.remove();
    writeData(userEmail, todos);
}

const checkTodo = (event) => {
    const isCheck = event.target.checked;
    const li = event.target.parentElement;
    const span = li.children[1];

    if (isCheck) span.classList.add("checked");
    else span.classList.remove("checked");
}

todoInputForm.addEventListener("submit", onSubmit);

export { showTodoList };
