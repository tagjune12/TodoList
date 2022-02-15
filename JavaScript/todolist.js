import { readData, writeData } from "./database.js";

const todoInputForm = document.querySelector("#todo-input-form");
const todoContent = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let todos = [];
let userEmail = "";

const onSubmit = (event) => {
    console.log("onTodoSubmit");
    event.preventDefault();

    // 로컬저장소에 데이터 쓰기
    addTodo(todoContent.value);


    todoContent.value = "";
}

// 할일 추가될때 화면에만 이전것들도 같이 추가되는 버그 있음
const showTodoList = (email = "") => {
    console.log("showTodoList:", email);

    // 로그인시
    if (email !== "") {
        userEmail = email;
        todos = readData(userEmail);
        console.log(todos);
    }

    todos = readData(userEmail);

    if (todos !== null) {
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

const addTodo = (todo) => {
    if (todos === null) todos = [];
    todos.push(todo);
    writeData(userEmail, todos);
    // showTodoList();

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

    todoList.appendChild(listItem);
}

const removeTodo = (event) => {
    const li = event.target.parentElement;
    const span = li.children[1];

    todos = todos.filter((value) => value !== span.innerText);
    li.remove();
    writeData(userEmail, todos);
    showTodoList();
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
