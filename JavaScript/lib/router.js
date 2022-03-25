import homeTemplate from '../../pages/home.hbs';
import signupTemplate from '../../pages/signup.hbs';
import todolistTemplate from '../../pages/todolist.hbs';

const Home = homeTemplate();
const Signup = signupTemplate();
const Todolist = todolistTemplate();


const routes = {
    '/': Home,
    '/home': Home,
    '/signup': Signup,
    '/todolist': Todolist
}

// entry point
async function initialRoutes(el) {
    return await renderHTML(el, routes['/']);
}

// set browser history
async function historyRouterPush(pathName, el) {
    console.log('historyRouterPush');
    window.history.pushState({}, pathName, window.location.origin + pathName)

    return await renderHTML(el, routes[pathName]);
}

// render
function renderHTML(el, route) {
    el.innerHTML = route
}

export { initialRoutes, historyRouterPush, renderHTML };