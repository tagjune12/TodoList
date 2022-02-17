import { loginEmail } from "./database.js";
import { showTodoList } from "./todolist.js";

const title = document.querySelector("#title");
const loginID = document.querySelector("#login-id");
const loginPW = document.querySelector("#login-pw");
const loginForm = document.querySelector("#login-form");
const clockSection = document.querySelector("#clock-todolist");

const tosignUpButton = document.querySelector("#signup");
const signUpForm = document.querySelector("#signup-form");

console.log("로그인 모듈 load");

const onSubmit = (event) => {
  event.preventDefault();
  console.log("로그인 Submit");
  const userEmail = loginID.value;
  const userPW = loginPW.value;

  if (event.submitter.id === "login") {
    loginEmail(userEmail, userPW).then((userCredential) => {
      const user = userCredential.user;
      console.log(`signup result: ${userCredential}`);
      alert("로그인 성공");

      // 로그인폼 숨기기
      loginForm.style.display = "none";

      // 회원가입폼 숨기기
      signUpForm.style.display = "none";

      // Todo List 페이지에 표시될 유저이름 표시
      title.innerText = `Hello ${userEmail.split("@")[0]}!`;

      // TodoList와 시계 표시
      clockSection.style.display = "flex";

      // Todo List 표시
      showTodoList(userEmail);

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    })
  }
}

const onSignUpClick = () => {
  loginForm.style.display = "none";
  signUpForm.style.display = "flex";
  console.log("회원가입 버튼 클릭");
}

loginForm.addEventListener("submit", onSubmit);
tosignUpButton.addEventListener("click", onSignUpClick);
