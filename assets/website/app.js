/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';





let showMenu = document.querySelector('a.menu-toggler')
showMenu.addEventListener('click', ()=>{
    let menu =  document.querySelector('nav .menu');
    menu.classList.toggle('displayed');
});