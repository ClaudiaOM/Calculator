
let displayValue =  "";

let operation = {
    first: 0,
    second: 0,
    operator: ""
}

let displayValueSelector = document.getElementById("display-text");



function add(number1, number2){
    return number1 + number2
}

function sub(number1, number2){
    return number1 - number2
}

function mul(number1, number2){
    return number1 * number2
}

function div(number1, number2){
    return number1 / number2
}


function operate(number1, number2, operator){
    operation.operator = operator;
    let res = 0;
    if(operator == "+"){
        res = add(number1, number2);
    }
    else if(operator == "-"){        
        res = sub(number1, number2);
    }
    else if(operator == "*"){        
        res = mul(number1, number2);
    }
    else if(operator == "/"){        
        res = div(number1, number2);
    }
    operation.first = res;
    operation.second = 0;
    return operation.first;
}

function typeNumber(number){
    if(displayValue.length < 14){
        displayValue = displayValue + number;
        displayValueSelector.innerText = displayValue;
    }
    else{
        alert("Max number of digits reached");
    }

}
