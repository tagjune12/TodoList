const signinForm = document.querySelector("#signin-form");
const signInID = document.querySelector("#signin-form #userID");
const signInPW = document.querySelector("#signin-form #userPW");

const onSignInSubmit = (event) => {
  event.preventDefault();
  const id = signInID.value;
  const password = signInPW.value;

  const localStorage = window.localStorage;

  if (!localStorage.getItem(id)) {
    console.log("가입성공");
    // signInID.value = "";
    // signInPW.value = "";
    signInID.setAttribute()
  }
  else {
    const signinmessage = document.querySelector("#signin-form h6");
    signinmessage.innerText = "중복되는 아이디가 있습니다."
  }

  localStorage.setItem(id, password);
}

signinForm.addEventListener("submit", onSignInSubmit);