// Récupérer les éléments du DOM
const burgerToggle = document.getElementById('burger-toggle');
const navMenu = document.querySelector('.nav-menu'); // Remplacez par la classe de votre menu

// Écouter le changement d'état de la checkbox
burgerToggle.addEventListener('change', () => {
    if (burgerToggle.checked) {
        // Actions à faire quand le menu s'ouvre
        navMenu.classList.add('active');
        console.log("Menu ouvert");
    } else {
        // Actions à faire quand le menu se ferme
        navMenu.classList.remove('active');
        console.log("Menu fermé");
    }
});