const mobileMenu = document.getElementById('mobileMenu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');


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