'use strict';
const dropDown = document.querySelector('.dropdown');
const dropMenu = document.querySelector('.drop-menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const mainMenu = document.querySelector('.main-menu');
const partnerDrop = document.querySelector('.partner-dropdown');
const partner = document.querySelector('.partner');

const menu = function () {
  closeMenu.classList.toggle('hidden');
  openMenu.classList.toggle('hidden');
  mainMenu.classList.toggle('hidden');
};
openMenu.addEventListener('click', menu);

closeMenu.addEventListener('click', menu);

dropDown.addEventListener('click', function () {
  dropMenu.classList.toggle('hidden');
});

partnerDrop.addEventListener('click', function () {
  partner.classList.toggle('hidden');
});
