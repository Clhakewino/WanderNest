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

function filtraCitta() {
    let input = document.getElementById('searchInput').value.toLowerCase().trim();
    let cards = document.getElementsByClassName('search-card');
    let messaggio = document.getElementById('messaggio-ricerca');

    // Se l'input è vuoto, mostra tutte le card
    if (input === '') {
        if (messaggio) messaggio.remove();
        return;
    }

    // Se l'input ha meno di 3 caratteri, nascondi tutte le card
    if (input.length < 3) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "none";
        }
        if (messaggio) messaggio.remove();
        return;
    }

    // Filtra le card
    let risultatiVisibili = 0;
    for (let i = 0; i < cards.length; i++) {
        let titolo = cards[i].querySelector('h2').innerText.toLowerCase();
        if (titolo.includes(input)) {
            cards[i].style.display = "flex";
            risultatiVisibili++;
        } else {
            cards[i].style.display = "none";
        }
    }

    // Gestione messaggio
    if (risultatiVisibili === 0) {
        if (!messaggio) {
            messaggio = document.createElement('p');
            messaggio.id = 'messaggio-ricerca';
            messaggio.innerText = 'Spiacenti, città non trovata.';
            document.getElementById('containerCitta').appendChild(messaggio);
        }
    } else {
        if (messaggio) messaggio.remove();
    }
}

// Opzionale: Cerca in tempo reale mentre l'utente scrive!
document.getElementById('searchInput').addEventListener('keyup', filtraCitta);

document.addEventListener('click', (event) => {
    const card = event.target.closest('.search-card');
    if (card) {
        const titolo = card.querySelector('h2').innerText.toLowerCase();
        // Mappa i titoli alle pagine
        const pagine = {
            'parigi': '../City/parigi.html',
            'tokyo': '../City/tokyo.html',
            'roma': '../City/roma.html',
            'new york': '../City/newYork.html',
            'barcellona': '../City/barcellona.html',
            'kyoto': '../City/kyoto.html'
        };
        if (pagine[titolo]) {
            window.location.href = pagine[titolo];
        }
    }
});