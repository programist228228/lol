const input = document.getElementById('input')[0];
const numbers = document.getElementsByClassName('numbers')[0];
const operations = document.getElementsByClassName('operations')[0];

function addNumber(e) { 
    let number = e.target.value;
    if (number != undefined) {
        input.value =  input.value + number;
    }
}

numbers.addEventListener('click', (e) => addNumber(e));

function addOperation(e) { 
    console.log(e.target.textContent);
}

numbers.addEventListener('click', (e) => addOperation(e));