// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5dBgP5uk1fRwStkXPlrP4740BoyXlofU",
    authDomain: "todo-list-340309.firebaseapp.com",
    projectId: "todo-list-340309",
    storageBucket: "todo-list-340309.appspot.com",
    messagingSenderId: "829367681458",
    appId: "1:829367681458:web:cb27c9ecd622e912b224ab",
    measurementId: "G-E75FMCK25H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth 설정
const auth = getAuth();

// 회원가입
const signupEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}


// 로그인
const loginEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}
// signInWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
// })
// .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// });

export { signupEmail, loginEmail };
