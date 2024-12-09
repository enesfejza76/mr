// Menu variables
let menu = document.getElementById('menu');
let menuOpenBtn = document.getElementById('openMenu');
let menuCloseBtn = document.getElementById('closeMenu');

// Search var
let search = document.getElementById('search');
let openSearchBtn = document.getElementById('open-search');
let closeSearchBtn = document.getElementById('close-search-btn');   

// To top variables
let toTop  = document.getElementById('to-top');

// To top event
window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 500){
      toTop.classList.add('active-to-top');
    } else{
      toTop.classList.remove('active-to-top');
    }
});

// Menu function
function opemMenu() {
    menu.style.height = '100%';
    menu.style.display = 'block';
}

function closeMenu() {
    menu.style.height = '0%';
    menu.style.display = 'none';
}

// Search function
function openSearch() {
    search.style.width = '100%';
}

function closeSearch() {
    search.style.width = '0';
}

// Menu event
menuOpenBtn.addEventListener('click', opemMenu);

menuCloseBtn.addEventListener('click', closeMenu);

// Search event
openSearchBtn.addEventListener('click', openSearch);

closeSearchBtn.addEventListener('click', closeSearch)