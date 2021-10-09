let menuMB = document.querySelector('.nav__menu-left');
let menuBtn = document.querySelector('.menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuMB.classList.toggle('active');
}
