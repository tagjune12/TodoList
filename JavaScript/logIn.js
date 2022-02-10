import { loginEmail } from "./database.js";
import { getTodoList } from "./todolist.js";

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
    loginForm.classList.add(HIDDEN_CLASS);
    getTodoList(userEmail);
    clockSection.classList.remove(HIDDEN_CLASS);

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
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
