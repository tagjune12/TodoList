import Home from '../../pages/Home.js';
import SingUp from '../../pages/SignUp.js';
import TodoList from '../../pages/TodoList.js';


const HomePage = Home();
const SignupPage = SingUp();
const TodolistPage = TodoList();


const routes = {
    '/': HomePage,
    '/home': HomePage,
    '/signup': SignupPage,
    '/todolist': TodolistPage
}

// set browser history
async function historyRouterPush(pathName, el) {
    console.log('historyRouterPush');
    window.history.pushState({}, '', window.location.origin + pathName)

    return await renderHTML(el, routes[pathName]);
}

// render
function renderHTML(el, route) {
    el.innerHTML = route
}

export { historyRouterPush, renderHTML };