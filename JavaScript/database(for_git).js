// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // ...
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

/**
 * Todo List를 가져오는 함수
 * @returns {array} 할일 목록을 반환
 */
const readData = (email) => {
    const localStorage = window.localStorage;
    const todos = localStorage.getItem(email);

    return JSON.parse(todos);
}

/**
 * @param {array} todos 할일을 담고 있는 리스트
 * @param {string} email todos를 가질 계정
 */
const writeData = (email, todos) => {
    const localStorage = window.localStorage;

    // localStorage.setItem(email, todos);
    localStorage.setItem(email, JSON.stringify(todos));
}


export { signupEmail, loginEmail, readData, writeData };
