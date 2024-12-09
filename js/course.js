// Menu variables
let menu = document.getElementById('menu');
let menuOpenBtn = document.getElementById('openMenu');
let menuCloseBtn = document.getElementById('closeMenu');

// Fiver var
let fiverContainer = document.getElementById('fiver-container');
let fiverCloseBtn = document.getElementById('fiver-close-btn');

// Menu function
function opemMenu() {
    menu.style.width = '70%';
}

function closeMenu() {
    menu.style.width = '0%';
}

// Fiver function
function fiverCloseFunction() {
    fiverContainer.style.display = 'none';
}

// Menu event
menuOpenBtn.addEventListener('click', opemMenu);

menuCloseBtn.addEventListener('click', closeMenu);

// Fiver event
fiverCloseBtn.addEventListener('click', fiverCloseFunction);