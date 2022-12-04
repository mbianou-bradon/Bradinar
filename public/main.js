const mobileMenu = document.getElementById('mobileMenu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sideMenu = document.getElementById('sideMenu');
const sideMenuIcon = document.getElementById('sideMenuIcon1');
const sideMenuIcon2 = document.getElementById('sideMenuIcon2');
const sideMenuCloseMenu = document.getElementById('sideMenuCloseMenu');


openMenu.addEventListener('click',() => {
    mobileMenu.classList.toggle('hidden');
    openMenu.classList.toggle('hidden');
    closeMenu.classList.toggle('hidden');
});


closeMenu.addEventListener('click',() => {
    mobileMenu.classList.toggle('hidden');
    openMenu.classList.toggle('hidden');
    closeMenu.classList.toggle('hidden');
});

sideMenuIcon.addEventListener('click', ()=> {
    sideMenu.classList.toggle('hidden');
});

sideMenuIcon2.addEventListener('click', ()=> {
    sideMenu.classList.toggle('hidden');
    sideMenuCloseMenu.classList.toggle('hidden');
});

sideMenuCloseMenu.addEventListener( 'click',()=> {
    sideMenu.classList.toggle('hidden');
});