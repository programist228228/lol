const input = document.getElementById('text_field')  ;

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
    input.value += val;
    console.log(e.target.textContent);

}

function cal(){
    let result = eval(input.value);
    input.value = result;
}



operations.addEventListener('click', (e) => {addOperation(e)});
go.addEventListener('click', cal);