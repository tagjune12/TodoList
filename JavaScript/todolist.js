// const todoInputForm = document.querySelector("form#todo-input-form");
const todoInputForm = document.querySelector("#todo-input-form");
const todoContext = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const onTodoSubmit = (event) => {
    console.log("onTodoSubmit");
    event.preventDefault();

    const todoListItem = document.createElement("li");

    const todoText = document.createElement("span");
    todoText.innerText = todoContext.value;

    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"

    const removeButton = document.createElement("button");
    removeButton.innerText = "❌";

    todoListItem.appendChild(checkBox);
    todoListItem.appendChild(todoText);
    todoListItem.appendChild(removeButton);

    todoList.appendChild(todoListItem);

    todoContext.value = "";
}

todoInputForm.addEventListener("submit", onTodoSubmit);
