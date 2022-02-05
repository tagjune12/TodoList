// import { getUserInfo, setUserInfo } from "./storage.js";
import { signupEmail } from "./storage.js";


const signUpForm = document.querySelector("#signup-form");
const signUpID = document.querySelector("#signup-form #userID");
const signUpPW = document.querySelector("#signup-form #userPW");

// const onsignUpSubmit = (event) => {
//   event.preventDefault();
//   const id = signUpID.value;
//   const password = signUpPW.value;

//   // const localStorage = window.localStorage;

//   if (!getUserInfo(id)) {
//     signUpID.value = "";
//     signUpPW.value = "";
//     // localStorage.setItem(id, password);
//     setUserInfo({ id: id, pw: password });
//   }
//   else {
//     const signUpmessage = document.querySelector("#signup-form h6");
//     signUpmessage.innerText = "중복되는 아이디가 있습니다."
//   }
// }

// signUpForm.addEventListener("submit", onsignUpSubmit);
const onsignUpSubmit = (event) => {
  event.preventDefault();
  const email = signUpID.value;
  const password = signUpPW.value;

  // const localStorage = window.localStorage;
  signupEmail(email, password).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(`signup result: ${userCredential}`);
    alert("로그인 성공");
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