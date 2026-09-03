const burgerToggle = document.getElementById('burger-toggle');
const navMenu = document.querySelector('.burger nav');

burgerToggle.addEventListener('change', () => {
    if (burgerToggle.checked) {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = 'none';
    }
});