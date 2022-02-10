// import { getUserInfo, setUserInfo } from "./storage.js";
import { signupEmail } from "./database.js";


const signUpForm = document.querySelector("#signup-form");
const signUpID = document.querySelector("#signup-form #userID");
const signUpPW = document.querySelector("#signup-form #userPW");

const onsignUpSubmit = (event) => {
  event.preventDefault();
  const email = signUpID.value;
  const password = signUpPW.value;

  // const localStorage = window.localStorage;
  signupEmail(email, password).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(`signup result: ${userCredential}`);
    alert("회원가입 성공");
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    alert(errorMessage);
    // ..
  });
}

signUpForm.addEventListener("submit", onsignUpSubmit);