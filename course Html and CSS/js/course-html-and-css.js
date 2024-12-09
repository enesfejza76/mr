// Menu variables
let menu = document.getElementById('menu');
let menuOpenBtn = document.getElementById('openMenu');
let menuCloseBtn = document.getElementById('closeMenu');

// btn var
let lessonBtn = document.getElementById('first-lesson');

// Menu function
function opemMenu() {
    menu.style.width = '70%';
}

function closeMenu() {
    menu.style.width = '0%';
}

// btn function
function seondLesson() {
    console.log('Edit mode');
}

// Menu event
menuOpenBtn.addEventListener('click', opemMenu);

menuCloseBtn.addEventListener('click', closeMenu);  

// btn event
lessonBtn.addEventListener('click', seondLesson);