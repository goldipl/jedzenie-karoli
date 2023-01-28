const burger = document.querySelector('#header .logo_burger .burger');
const nav = document.querySelector('#header #navigation');
const nav_el = document.querySelectorAll('#header #navigation ul li a');

burger.addEventListener('click', () => {
    nav.classList.toggle('show');
    burger.classList.toggle('bx-x');
});

nav_el.forEach(e => {
    e.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});