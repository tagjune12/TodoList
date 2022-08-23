import { signupEmail } from "./lib/api.js";


console.log('signup.js is loaded');

const onsignUpSubmit = (event) => {
  event.preventDefault();

  const signUpID = document.querySelector("#signup-form #userID");
  const signUpPW = document.querySelector("#signup-form #userPW");

  const email = signUpID.value;
  const password = signUpPW.value;

  signupEmail(email, password).then(() => {
    alert("회원가입 성공");
    signUpID.value = "";
    signUpPW.value = "";

  }).catch((error) => {
    const errorCode = error.code;
    let errorMessage = "";

    const ALREADY_IN_USE = "auth/email-already-in-use";
    const INVALID_EMAIL = "auth/invalid-email";
    const WEAK_PASSWORD = "auth/weak-password";

    switch (errorCode) {
      case ALREADY_IN_USE: errorMessage = "이미 존재하는 계정입니다.";
        break;
      case INVALID_EMAIL: errorMessage = "ID를 이메일형식으로 입력해 주세요.\n예시) ID@gmail.com";
        break;
      case WEAK_PASSWORD: errorMessage = "비밀번호는 8~12자(영문,숫자,특수문자)의 조합으로 입력해주세요.";
        break;
    }

    alert(errorMessage);
  });
}



export default () => {
  const signUpForm = document.querySelector("#signup-form");
  signUpForm.addEventListener("submit", onsignUpSubmit);
};