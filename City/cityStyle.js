fetch('cityStyle.html')
    .then(response => response.text())
    .then(data => {
        // Sostituisci l'URL placeholder con quello dinamico
        if (window.heroImageUrl) {
            data = data.replace('PLACEHOLDER_IMAGE_URL', window.heroImageUrl);
        }
        if (window.title) {
            data = data.replace('TITLE', window.title);
        }
        if (window.subtitle) {
            data = data.replace('SUBTITLE', window.subtitle);
        }
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