const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// chiudi il menu se l'utente clicca fuori
document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});