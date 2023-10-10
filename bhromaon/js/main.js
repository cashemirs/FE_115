function toggleMenu() {
    const menu = document.querySelector('.header_navigation');
    menu.classList.toggle('show');
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');
}