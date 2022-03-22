import './CSS/index.css';
import './CSS/login.css';

import { initialRoutes, historyRouterPush } from './JavaScript/lib/router.js';
// import './JavaScript/login.js';
const contentDiv = document.querySelector("div.content");

initialRoutes(contentDiv);

