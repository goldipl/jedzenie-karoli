const burger = document.querySelector('#header .logo_burger .burger');
const nav = document.querySelector('#header #navigation');
const nav_el = document.querySelectorAll('#header #navigation ul li a');
const footer_year = document.querySelector('#footer span.year');

burger.addEventListener('click', () => {
    nav.classList.toggle('show');
    burger.classList.toggle('bx-x');
});

nav_el.forEach(e => {
    e.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});

footer_year.innerHTML = new Date().getFullYear();