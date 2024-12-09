let form = document.getElementById('form');
let inputName = document.getElementById('name');
let inputDate = document.getElementById('date');
let inputAmount = document.getElementById('amount');
let tableContainer = document.getElementById('table');

function addNewExpanse(e) {
    e.preventDefault();
    let name = document.createElement('div');
    name.innerHTML = inputName.value;
    name.classList.add('expenses-styling');
    let date = document.createElement('div');
    date.innerHTML = inputDate.value;
    date.classList.add('expenses-styling');
    let amount = document.createElement('div');
    amount.innerHTML = inputAmount.value + '$'; 
    amount.classList.add('expenses-styling');
    inputName.value = '';
    inputDate.value = '';
    inputAmount.value = '';
    tableContainer.appendChild(name);
    tableContainer.appendChild(date);
    tableContainer.appendChild(amount);
}

form.addEventListener('submit' , addNewExpanse);