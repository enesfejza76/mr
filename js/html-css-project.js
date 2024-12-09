// Menu variables
let menu = document.getElementById('menu');
let menuOpenBtn = document.getElementById('openMenu');
let menuCloseBtn = document.getElementById('closeMenu');

// Fiver var
let fiverContainer = document.getElementById('fiver-container');
let fiverCloseBtn = document.getElementById('fiver-close-btn');

// Container api
const url = './data/data.json';
let container = document.getElementById('container');
let containerMostPopular = document.getElementById('container-most-popular');

function showProject() {
    fetch(url)
    .then((response) =>{
        return response.json();
    })
    .then((item) =>{
        item.forEach(product => {
            if (product.language == 'Html and CSS'){
                let linkToProject = document.createElement('a');
                linkToProject.setAttribute('href', product.linkProject);
                linkToProject.classList.add('container-recent-post-boxes-box-link');
                container.appendChild(linkToProject);
                let wrapper = document.createElement('div');
                wrapper.classList.add('container-recent-post-boxes-box');
                linkToProject.appendChild(wrapper);
                let img = document.createElement('img');
                img.setAttribute('src', product.image);
                img.classList.add('container-recent-post-boxes-box-img');
                wrapper.appendChild(img);
                let title = document.createElement('h1');
                title.classList.add('color-blue');
                title.innerHTML = product.title;
                wrapper.appendChild(title);
                let containerRecentPostBoxLinkTxt = document.createElement('div');
                containerRecentPostBoxLinkTxt.classList.add('container-recent-post-boxes-box-link-txt');
                wrapper.appendChild(containerRecentPostBoxLinkTxt);
                let linkHome = document.createElement('a');
                linkHome.setAttribute('href', product.link);
                linkHome.innerHTML = 'Mr. Code Crafter';
                containerRecentPostBoxLinkTxt.appendChild(linkHome);
                let paragraph = document.createElement('p');
                paragraph.innerHTML = product.date;
                containerRecentPostBoxLinkTxt.appendChild(paragraph);
            }
        });
    })
}

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
window.addEventListener('load', showProject);

window.addEventListener('load', showProjectMostPopular);