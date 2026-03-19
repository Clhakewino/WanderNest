fetch('../Top/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
        // IMPORTANTE: Reinizializza il menu a tendina qui dentro dopo il caricamento
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        document.addEventListener('click', (event) => {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    });