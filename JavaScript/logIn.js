const loginID = document.querySelector("#login-form #userID");
const loginPW = document.querySelector("#login-form #userPW");
const loginForm = document.querySelector("#login-form");


const toSignInButton = document.querySelector("#signin");
const signinPage = document.querySelector("#signin-form");

const HIDDEN_CLASS = "hidden";

const userDB = window.localStorage;


const onSubmit = (event) => {
  event.preventDefault();

  // const userID = loginID.value;
  // const userPW = loginPW.value;

  // const userPWFromDB = userDB.getItem(userID.toString());

  loginForm.classList.add(HIDDEN_CLASS);
  // if (userPWFromDB.toString() === userPW) {
  //   // 화면 전환 로직
  //   loginForm.classList.add(HIDDEN_CLASS);
  // }
}

const onSignInClick = () => {
  loginForm.classList.add(HIDDEN_CLASS);
  signinPage.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", onSubmit);
toSignInButton.addEventListener("click", onSignInClick);
