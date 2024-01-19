const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('a');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  navbar.classList.toggle('navbar-dark');
  links.forEach(link => link.classList.toggle('light-links'));
});