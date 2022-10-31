import { updateNav } from './app.js';
import { showSection } from './dom.js';

const home = document.getElementById('homeSection');
home.remove();

const about = document.getElementById('aboutSection');
about.remove();

export function showHomePage() {
    updateNav();
    showSection(home);
}
export function showAboutPage() {
    showSection(about);
}
