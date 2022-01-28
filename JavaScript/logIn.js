import { getUserInfo } from "./storage";


const loginID = document.querySelector("#login-id");
const loginPW = document.querySelector("#login-pw");
const loginForm = document.querySelector("#login-form");
const clockSection = document.querySelector("#clock-todolist");


const tosignUpButton = document.querySelector("#signup");
const signUpPage = document.querySelector("#signup-form");

const HIDDEN_CLASS = "hidden";


const onSubmit = (event) => {
  event.preventDefault();
  console.log("로그인 Submit");
  const userID = loginID.value;
  const userPW = loginPW.value;

  const userPWFromDB = getUserInfo(userID);

  if (userPWFromDB === userPW) {
    // 화면 전환 로직
    loginForm.classList.add(HIDDEN_CLASS);
    clockSection.classList.remove(HIDDEN_CLASS);
    console.log("로그인 성공");
  }
  else {
    alert("일치하는 계정이 없습니다");
  }
}

const onSignUpClick = () => {
  loginForm.classList.add(HIDDEN_CLASS);
  signUpPage.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", onSubmit);
tosignUpButton.addEventListener("click", onSignUpClick);
