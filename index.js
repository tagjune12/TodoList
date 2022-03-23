// import './CSS/index.css';
// import './CSS/login.css';

import { initialRoutes, historyRouterPush } from './JavaScript/lib/router.js';


const contentDiv = document.querySelector("div.content");
const title = document.querySelector("#title > a");

window.onload = () => {
    try {
        initialRoutes(contentDiv).then(() => {
            import('./JavaScript/logIn.js');
        });
        console.log('onload');
    } catch (e) {
        console.error(e);
    }
}

// window.location.reload = () => {
//     console.log('reload');
// }

const onTitleClick = (event) => {
    title.innerText = "TodoList";
    clearInputContent();

    const path = event.target.getAttribute('router');
    try {
        historyRouterPush(path, contentDiv).then(() => {
            import('./JavaScript/logIn.js');
        });
    } catch (e) {
        console.error(e);
    }
}

const clearInputContent = () => {
    const inputTags = document.querySelectorAll("input");

    inputTags.forEach((item) => item.value = "");
}

title.addEventListener("click", onTitleClick);




export default function loadPage(path) {
    console.log("load Page");
    try {
        historyRouterPush(path, contentDiv).then(() => {
            import(`./JavaScript${path}.js`);
            // console.log(`./JavaScript${path}.js`);
            // import(`./CSS${path}.css`);
        })
    } catch (e) {
        console.error(e);
    }
}