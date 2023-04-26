
let displayValue =  "";
let displayHistory =  "";

let operation = {
    first: 0,
    second: 0,
    operator: "",
    equals : false
}

let displayValueSelector = document.getElementById("display-text");
let displayHistorySelector = document.getElementById("display-history");



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
    else if(operator == "x"){        
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
    if(operation.equals){
        operation.equals = false;
        displayValue = "";
    }
    if(!operation.equals && displayValue.length < 14){
        displayValue = displayValue + number;
        displayValueSelector.innerText = displayValue;
    }
    else{
        alert("Max number of digits reached");
    }

}

function typeOperator(operator){
    operation.first = displayValue;
    operation.operator = operator;
    displayHistory = displayValue + " "  + operator + " ";
    displayHistorySelector.innerText = displayHistory;
    displayValue = "";
    displayValueSelector.innerText = "0";
}

function typeEquals(){
    operation.second = displayValue;
    let result = operate(Number(operation.first), Number(operation.second), operation.operator)
    displayValue = result + "";
    operation.first = result;
    displayValueSelector.innerText = displayValue;
    displayHistory = "";
    displayHistorySelector.innerHTML = "";
    operation.equals = true;
}
