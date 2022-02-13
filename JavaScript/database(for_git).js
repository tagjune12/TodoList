// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getDatabase, ref, set, child, get, push } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

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


// 할일 조회 및 추가
// 쓰기
const updateData = (domain, id, todoItem) => {
    const db = getDatabase();

    // A post entry.
    const postData = {
        author: username,
        uid: uid,
        body: body,
        title: title,
        starCount: 0,
        authorPic: picture
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'posts')).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return update(ref(db), updates);
}
// 데이터를 추가함
const writeData = (domain, id, todoItem) => {
    const db = getDatabase();
    // const todos = readData(domain)[id];

    // console.log("writeData\n", todos);
    // console.log("writeData2\n", todos[id]);

    // set(push(ref(db, `${domain}/${id}/`)), {
    //     id: todoItem
    // });

    readData(domain).then((snapshot) => {
        if (snapshot.exists()) {
            // 데이터가 있는경우
            let todos = readData(domain)[id];
            console.log("writeData1:", todos);
        } else {
            // 데이터가 없는 경우
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

// 읽기
const readData = (domain, id) => {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `${domain}`))
}


// const readData = (domain, id) => {
//     const dbRef = ref(getDatabase());
//     let result = null;
//     get(child(dbRef, `${domain}`)).then((snapshot) => {
//         if (snapshot.exists()) {
//             // 데이터가 있는경우
//             console.log(snapshot.val());
//             result = snapshot.val();
//         } else {
//             // 데이터가 없는 경우
//             console.log("No data available");
//         }
//     }).catch((error) => {
//         console.error(error);
//     });

//     return result;
// }

const test = async (domain, id) => {
    let result = undefined;

    const dbRef = ref(getDatabase());
    await get(child(dbRef, `${domain}`)).then((snapshot) => {
        console.log("check");
        result = snapshot.val();
    }).catch((error) => {
        console.log(error);
    })

    return result;
}
export { signupEmail, loginEmail, writeData, readData, test };
