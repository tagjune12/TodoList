import { getUserInfo, setUserInfo } from "./storage";


const signUpForm = document.querySelector("#signup-form");
const signUpID = document.querySelector("#signup-form #userID");
const signUpPW = document.querySelector("#signup-form #userPW");

const onsignUpSubmit = (event) => {
  event.preventDefault();
  const id = signUpID.value;
  const password = signUpPW.value;

  // const localStorage = window.localStorage;

  if (!getUserInfo(id)) {
    signUpID.value = "";
    signUpPW.value = "";
    // localStorage.setItem(id, password);
    setUserInfo({ id: id, pw: password });
  }
  else {
    const signUpmessage = document.querySelector("#signup-form h6");
    signUpmessage.innerText = "중복되는 아이디가 있습니다."
  }
}

signUpForm.addEventListener("submit", onsignUpSubmit);