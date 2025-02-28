const menuButton = document.getElementById('menuButton');
const navbar = document.getElementById('navbar');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('visible');
});