import loadPage from '../index.js';
import { loginEmail } from "./lib/api.js";


const onSubmit = (event) => {
  event.preventDefault();
  console.log("로그인 Submit");

  const loginID = document.querySelector("#login-id");
  const loginPW = document.querySelector("#login-pw");
  const emailInput = loginID.value;
  const passwordInput = loginPW.value;

  if (event.submitter.id === "login") {
    loginEmail(emailInput, passwordInput).then((userCredential) => {
      alert("환영합니다!");

      // Todo List 페이지에 표시될 유저이름 표시
      const userEmail = userCredential.user.email;
      const title = document.querySelector("#title > a");
      title.innerText = `Hello ${userEmail.split("@")[0]}!`;

      const path = event.target.getAttribute('router');
      loadPage(path);
      localStorage.setItem('userid', userEmail);

    }).catch((error) => {
      console.log(error);
      alert("일치하는 계정이 존재하지 않습니다.");
    })
  }
}

const onSignUpClick = (event) => {
  event.preventDefault();
  const path = event.target.getAttribute('router');

  console.log(path);
  loadPage(path);
  console.log("회원가입 버튼 클릭");
}

export default () => {

  const loginForm = document.querySelector("#login-form");
  const tosignUpButton = document.querySelector("#signup");

  console.log("load home.js from addEventListeners");
  loginForm.addEventListener("submit", onSubmit);
  tosignUpButton.addEventListener("click", onSignUpClick);
};

