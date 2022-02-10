import { readData, writeData } from "./database.js";

const userName = document.querySelector("#username");
const todoInputForm = document.querySelector("#todo-input-form");
const todoContent = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// 데이터베이스 활용X
// const onTodoSubmit = (event) => {
//     console.log("onTodoSubmit");
//     event.preventDefault();

//     const todoListItem = document.createElement("li");

//     const todoText = document.createElement("span");
//     todoText.innerText = todoContent.value;

//     const checkBox = document.createElement("input")
//     checkBox.type = "checkbox"

//     const removeButton = document.createElement("button");
//     removeButton.innerText = "❌";

//     todoListItem.appendChild(checkBox);
//     todoListItem.appendChild(todoText);
//     todoListItem.appendChild(removeButton);

//     todoList.appendChild(todoListItem);

//     todoContent.value = "";
// }

// 데이터베이스 활용O
const onTodoSubmit = (event) => {
    console.log("onTodoSubmit");
    event.preventDefault();

    // writeData()

    todoContent.value = "";
}

const getTodoList = (email) => {
    const id = email.split("@")[0];
    const domain = email.split("@")[1].split(".")[0];

    userName.innerText = id;
    // 데이터 조회
    readData(`${domain}/${id}`);
}

todoInputForm.addEventListener("submit", onTodoSubmit);

export { getTodoList };
