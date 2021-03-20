const input = document.getElementById('input')  ;

const numbers = document.getElementsByClassName('numbers')[0];

const operations = document.getElementsByClassName('operations')[0];

const go = document.getElementById('go');



function addNumber(e) { 

    let number = e.target.value;

    if (number != undefined) {

        input.value =  input.value + numbers;

    }

}



numbers.addEventListener('click', (e) => addNumber(e));



function addOperation(e) { 

    let val = e.target.innerText
    text.value += val;
    console.log(e.target.textContent);

}



numbers.addEventListener('click', (e) => addOperation(e));