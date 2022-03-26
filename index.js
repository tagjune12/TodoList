import './CSS/index.css';
import './CSS/home.css';
import './CSS/signup.css';
import './CSS/todolist.css';


import { historyRouterPush } from './JavaScript/lib/router.js';


const contentDiv = document.querySelector("div.content");
const title = document.querySelector("#title > a");


const loadPage = (path) => {
    console.log("load Page", path);
    try {
        historyRouterPush(path, contentDiv).then(() => {
            if (path === '/') {
                import(`./JavaScript/home.js`).then((obj) => {
                    console.log("import home.js");

                    obj.default();
                });
            }
            else {
                console.log(`import${path}.js`);
                import(`./JavaScript${path}.js`).then(obj => {

                    obj.default();
                });
            }

        })
    } catch (e) {
        console.error(e);
    }
}

const onTitleClick = () => {
    loadPage('/');
}

window.onpopstate = () => {
    loadPage(window.location.pathname);
}

title.addEventListener("click", onTitleClick);

loadPage('/');

export default loadPage;