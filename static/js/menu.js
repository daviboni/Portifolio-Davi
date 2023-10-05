const body = document.body;

function StatusMenuNav(hamburger) {
    const menuNav = document.getElementById('nav-menu');
    const menuOptions = document.getElementById('menu-options');

    let newStatus = menuNav.getAttribute('status') === 'hidden' ? 'visible' : 'hidden';
    menuNav.setAttribute('status', newStatus);

    if (newStatus === 'hidden') {
        document.body.style.removeProperty('overflow');

    } else {
        body.style.overflow = 'hidden';
    }
}

function FecharMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.setAttribute('status', 'hidden');
    document.body.style.removeProperty('overflow');
}



