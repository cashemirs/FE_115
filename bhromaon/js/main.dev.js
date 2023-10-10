"use strict";

function toggleMenu() {
  var menu = document.querySelector('.header_navigation');
  menu.classList.toggle('show');
  var menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.toggle('active');
}