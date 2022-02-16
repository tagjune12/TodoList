import { loginEmail } from "./database.js";
import { showTodoList } from "./todolist.js";

const title = document.querySelector("#title");
const loginID = document.querySelector("#login-id");
const loginPW = document.querySelector("#login-pw");
const loginForm = document.querySelector("#login-form");
const clockSection = document.querySelector("#clock-todolist");


const tosignUpButton = document.querySelector("#signup");
const signUpPage = document.querySelector("#signup-form");

const HIDDEN_CLASS = "hidden";

console.log("로그인 모듈 load");

const onSubmit = (event) => {
  event.preventDefault();
  console.log("로그인 Submit");
  const userEmail = loginID.value;
  const userPW = loginPW.value;

  loginEmail(userEmail, userPW).then((userCredential) => {
    const user = userCredential.user;
    console.log(`signup result: ${userCredential}`);
    alert("로그인 성공");
    // 로그인폼 숨기기
    loginForm.classList.add(HIDDEN_CLASS);
    // 회원가입 버튼 숨기기
    tosignUpButton.classList.add(HIDDEN_CLASS);

    // Todo List 페이지에 표시될 유저이름 표시
    // const userName = document.querySelector("#username");
    // userName.innerText = `${userEmail.split("@")[0]}'s today Todo List`;
    title.innerText = `Hello ${userEmail.split("@")[0]}!`;

    // Todo List 표시
    showTodoList(userEmail);
    // TodoList와 시계 표시
    clockSection.classList.remove(HIDDEN_CLASS);

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorCode);
    console.log(errorMessage);
    alert(errorMessage);
  })
}

const onSignUpClick = () => {
  loginForm.classList.add(HIDDEN_CLASS);
  signUpPage.classList.remove(HIDDEN_CLASS);
  console.log("회원가입 버튼 클릭");
}

loginForm.addEventListener("submit", onSubmit);
tosignUpButton.addEventListener("click", onSignUpClick);
