import { loginEmail } from "./lib/api.js";
import { showTodoList } from "./todolist.js";

const title = document.querySelector("#title > a");
const loginID = document.querySelector("#login-id");
const loginPW = document.querySelector("#login-pw");
const loginForm = document.querySelector("#login-form");
const clockSection = document.querySelector("#clock-todolist");

const tosignUpButton = document.querySelector("#signup");
const signUpForm = document.querySelector("#signup-form");

const HIDDEN = "none";
const SHOW = "flex";

const onSubmit = (event) => {
  event.preventDefault();
  console.log("로그인 Submit");
  const emailInput = loginID.value;
  const passwordInput = loginPW.value;

  if (event.submitter.id === "login") {
    loginEmail(emailInput, passwordInput).then((userCredential) => {
      alert("환영합니다!");
      // 로그인폼 숨기기
      loginForm.style.display = HIDDEN;

      // 회원가입폼 숨기기
      signUpForm.style.display = HIDDEN;

      // Todo List 페이지에 표시될 유저이름 표시
      // title.innerText = `Hello ${userEmail.split("@")[0]}!`;
      const userEmail = userCredential.user.email;
      title.innerText = `Hello ${userEmail.split("@")[0]}!`;

      // TodoList와 시계 표시
      clockSection.style.display = SHOW;

      // Todo List 표시
      showTodoList(userEmail);

    }).catch((error) => {
      alert("일치하는 계정이 존재하지 않습니다.");
    })
  }
}

const onSignUpClick = () => {
  loginForm.style.display = HIDDEN;
  signUpForm.style.display = SHOW;
  console.log("회원가입 버튼 클릭");
}

const onTitleClick = () => {
  title.innerText = "TodoList";
  clearInputContent();

  signUpForm.style.display = HIDDEN;
  clockSection.style.display = HIDDEN;
  loginForm.style.display = SHOW;
}

const clearInputContent = () => {
  const inputTags = document.querySelectorAll("input");

  inputTags.forEach((item) => item.value = "");
}

loginForm.addEventListener("submit", onSubmit);
tosignUpButton.addEventListener("click", onSignUpClick);
title.addEventListener("click", onTitleClick);
