const hamburgerIcon = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');


let showMenu = false;

hamburgerIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburgerIcon.classList.add('close');
        menu.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //Set Menu State
        showMenu = true;
    } else {
        hamburgerIcon.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}