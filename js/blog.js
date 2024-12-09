// Menu variables
let menu = document.getElementById('menu');
let menuOpenBtn = document.getElementById('openMenu');
let menuCloseBtn = document.getElementById('closeMenu');

// Fiver var
let fiverContainer = document.getElementById('fiver-container');
let fiverCloseBtn = document.getElementById('fiver-close-btn');

// Container api
const url = './data/data.json';
let containerMostPopular = document.getElementById('container-most-popular');

function showProjectMostPopular() {
    fetch(url)
    .then((response) =>{
        return response.json();
    })
    .then((item) =>{
        item.forEach(product =>{
            if (product.popular == 'True'){
                let linkProject = document.createElement('a');
                linkProject.setAttribute('href', product.linkProject);
                containerMostPopular.appendChild(linkProject);
                let wrapper = document.createElement('div');
                wrapper.classList.add('container-follow-us-container-boxes-box');
                linkProject.appendChild(wrapper);
                let img = document.createElement('img');
                img.setAttribute('src', product.image);
                img.classList.add('container-follow-us-container-boxes-box-img');
                wrapper.appendChild(img);
                let titleContainer = document.createElement('h1');
                titleContainer.classList.add('container-follow-us-container-boxes-box-txt');
                wrapper.appendChild(titleContainer);
                let title = document.createElement('h1');
                title.innerHTML = product.title;
                titleContainer.appendChild(title);
                let paragraphDate = document.createElement('p');
                paragraphDate.innerHTML = product.date;
                titleContainer.appendChild(paragraphDate);
            }
        })
    })
}

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


// Container api event
window.addEventListener('load', showProjectMostPopular);