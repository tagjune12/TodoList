import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
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

export { signupEmail, loginEmail };
