// Menu variables
let menu = document.getElementById('menu');
let menuOpenBtn = document.getElementById('openMenu');
let menuCloseBtn = document.getElementById('closeMenu');

// Fiver var
let fiverContainer = document.getElementById('fiver-container');
let fiverCloseBtn = document.getElementById('fiver-close-btn');

// Copy html code var
let copyCodeBtn = document.getElementById('copy-button');

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

// Copy html code function
function copyHtmlCode() {
    let input = 'enes fejza';
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    console.log('Enes Fejza');
}

// Menu event
menuOpenBtn.addEventListener('click', opemMenu);

menuCloseBtn.addEventListener('click', closeMenu);

// Fiver event
fiverCloseBtn.addEventListener('click', fiverCloseFunction);

// Copy html code event
copyCodeBtn.addEventListener('click', copyHtmlCode);