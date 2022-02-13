import { readData, writeData, test } from "./database.js";

const userName = document.querySelector("#username");
const todoInputForm = document.querySelector("#todo-input-form");
const todoContent = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let id = "";
let domain = "";

// 데이터베이스 활용O
const onSubmit = (event) => {
    console.log("onTodoSubmit");
    event.preventDefault();

    // 서버에 데이터 쓰기
    addTodo(todoContent.value);
    // TodoList 갱신하기

    todoContent.value = "";
}

const getTodoList = (email = "") => {
    console.log(email);
    if (email !== "") {
        const splittedEmail = email.split("@");
        id = splittedEmail[0];
        domain = splittedEmail[1].split(".")[0];

    }
    userName.innerText = id;
    // 데이터 조회
    // readData(domain, id);

    // readData(domain, id).then((snapshot) => {
    //     if (snapshot.exists()) {
    //         // 데이터가 있는경우
    //         console.log(snapshot.val());
    //     } else {
    //         // 데이터가 없는 경우
    //         console.log("No data available");
    //     }
    // }).catch((error) => {
    //     console.error(error);
    // });

    // let testData = undefined;
    console.log("getTodoList\n", test(domain, id, testData));
    // console.log("testData: ", testData);
}

const addTodo = (todo) => {
    writeData(domain, id, todo);
    getTodoList();
}

todoInputForm.addEventListener("submit", onSubmit);

export { getTodoList };
