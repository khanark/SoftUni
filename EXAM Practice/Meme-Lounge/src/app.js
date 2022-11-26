import page from '../node_modules/page/page.mjs';
import * as authService from './api/authService.js';
import { addNavigation } from './middlewares/navigationMiddleware.js';
import { addRender } from './middlewares/renderContentMiddleware.js';
import { addSession } from './middlewares/sessionMiddleware.js';
import { registerView } from './views/registerView.js';
import { loginView } from './views/loginView.js';
import { navigationTemplate } from './views/navigationView.js';
import { homeView } from './views/homeView.js';
import { logoutView } from './views/logoutView.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { profileView } from './views/myProfileView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';

// *** fix the roots for the content and the navigation ***
const contentRoot = document.querySelector('main');
const navRoot = document.querySelector('nav');
const errRoot = document.getElementById('notifications');

page(addRender(contentRoot, navRoot, errRoot));
page(addSession(authService.getUser));
page(addNavigation(navigationTemplate));
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/memes', catalogView);
page('/create', createView);
page('/myProfile', profileView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page.start();
