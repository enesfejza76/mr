// Variable to do list
// Item form
let itemForm = document.getElementById('input-form');
// Item input
let itemInput = document.getElementById('input-text');
// Item container
let itemContainer = document.getElementById('container-item');
// Item filter
let itemFilter = document.getElementById('item-filter');
// Clear all item btn
let btnClearAll = document.getElementById('btn-clear-all');
// Select category input
let selectCategoryInput = document.getElementById('input-select');

// Functions to do list
// Add new item
function addItem(e) {
    // Prevent the page from refreshing
    e.preventDefault();
    // Input text container
    let inputTextContainer = document.createElement('ul');
    inputTextContainer.classList.add('to-do-list-txt-container');
    itemContainer.appendChild(inputTextContainer);
    // Input category
    let inputCategoryForm = document.createElement('div');
    inputTextContainer.appendChild(inputCategoryForm);
    if (selectCategoryInput.value == 1) {
        inputCategoryForm.classList.add('input-category-1');
        inputCategoryForm.addEventListener('click',function(){
            inputCategoryForm.classList.add('input-category-1-complete');
            inputText.style.textDecoration = 'line-through';
        });
    } else if (selectCategoryInput.value == 2) {
        inputCategoryForm.classList.add('input-category-2');
        inputCategoryForm.addEventListener('click',function(){
            inputCategoryForm.classList.add('input-category-2-complete');
            inputText.style.textDecoration = 'line-through';
        });
    } else if (selectCategoryInput.value == 3) {
        inputCategoryForm.classList.add('input-category-3');
        inputCategoryForm.addEventListener('click',function(){
            inputCategoryForm.classList.add('input-category-3-complete');
            inputText.style.textDecoration = 'line-through';
        });
    } else if (selectCategoryInput.value == 4) {
        inputCategoryForm.classList.add('input-category-4');
        inputCategoryForm.addEventListener('click',function(){
            inputCategoryForm.classList.add('input-category-4-complete');
            inputText.style.textDecoration = 'line-through';
        });
    } else {
        inputCategoryForm.classList.add('input-category-0');
        inputCategoryForm.addEventListener('click',function(){
            inputCategoryForm.classList.add('input-category-0-complete');
            inputText.style.textDecoration = 'line-through';
        });
    }
    // Input text
    let inputText = document.createElement('li');
    inputText.classList.add('to-do-list-txt');
    inputText.innerHTML = itemInput.value;
    inputTextContainer.appendChild(inputText);
    // Input close
    let inputClose = document.createElement('i');
    inputClose.className = 'fa-solid fa-xmark';
    inputClose.classList.add('to-do-list-delete');
    inputTextContainer.appendChild(inputClose);
    console.log(inputClose);
    // Input function to delete
    inputClose.addEventListener('click', function(){
        itemContainer.removeChild(inputTextContainer);
    });
    // Clear all btn
    btnClearAll.addEventListener('click',function(){
        itemContainer.removeChild(inputTextContainer);
    });
    // When you add new item the input text goes blank
    itemInput.value = '';
    // When you add new item the select button goes to the default value
    selectCategoryInput.value = 0;
}
// Add new item end

function createItem(item) {
    
}

// When you submit function
itemForm.addEventListener('submit',addItem);

// Filter item function 
function filterItems(item) {
    // Get input value
    let inputValue = item.target.value.toLowerCase();
    console.log(inputValue);
    // Get li content txt
    let listItem = document.querySelectorAll('.to-do-list-txt-container');
    console.log(listItem);
    // Get for each list item 
    listItem.forEach((itemLi) =>{
        // Get for each li text content
        const itemText = itemLi.firstChild.textContent.toLowerCase();
        console.log(itemText);

        if (itemText.indexOf(inputValue) != -1){
            itemLi.style.display = 'none';
        } else{
            itemLi.style.display = 'flex';
        }
    });
}   
// Filter item function end 

// Filter item
itemFilter.addEventListener('input', filterItems);

// Save item to local storage
localStorage.setItem('Name','Enes');
// Get item on local storage
console.log(localStorage.getItem('Name'));