// import './CSS/index.css';
// import './CSS/login.css';

import { initialRoutes, historyRouterPush, renderHTML } from './JavaScript/lib/router.js';


const contentDiv = document.querySelector("div.content");
const title = document.querySelector("#title > a");

// window.onload = () => {
//     try {
//         // window.history.pushState({}, '', window.location.origin + '/home');
//         initialRoutes(contentDiv).then(() => {
//             import('./JavaScript/home.js');
//         });
//         console.log('onload');
//     } catch (e) {
//         console.error(e);
//     }
//     console.log("onload");
// }

try {
    // window.history.pushState({}, '', window.location.origin + '/home');
    initialRoutes(contentDiv).then(() => {
        import('./JavaScript/home.js').then(obj => {
            console.log(obj);
            obj.default();
        });
    });
    console.log('onload');
} catch (e) {
    console.error(e);
}
// console.log("onload");

// window.onunload = (event) => {
//     setTimeout(null, 50000);
//     console.log('onunload');

// }

const loadPage = (path) => {
    console.log("load Page", path);
    // const targetPath = path === '/' ? '/home' : path;
    try {
        historyRouterPush(path, contentDiv).then(() => {
            if (path === '/') {

                import(`./JavaScript/home.js`).then((obj) => {
                    console.log("import home.js");
                    // console.log(obj);
                    obj.default();
                });
            }
            else {
                console.log(`import${path}.js`);
                import(`./JavaScript${path}.js`);
            }
            // import(`./CSS${path}.css`);
        })
    } catch (e) {
        console.error(e);
    }
}

const onTitleClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, '/', window.location.origin);
    window.history.go(0);
}

window.onpopstate = () => {
    loadPage(window.location.pathname);
}

// const clearInputContent = () => {
//     const inputTags = document.querySelectorAll("input");

//     inputTags.forEach((item) => item.value = "");
// }

title.addEventListener("click", onTitleClick);



export default loadPage;