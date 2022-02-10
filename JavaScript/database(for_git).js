// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    //...
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


// 할일 조회 및 추가
// 쓰기
function writeData(userEmail, todoItem) {
    const db = getDatabase();
    set(ref(db, 'users/' + userEmail), {
        email: userEmail,
        todoList: todoItem
    });
}


export { signupEmail, loginEmail };
