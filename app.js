
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
        if(number2 == 0){
            res = "ERROR!";
        }
        else{
            res = div(number1, number2);
        }
    }
    operation.first = parseFloat(res.toFixed(5));
    operation.second = 0;
    let str = operation.first + "";
    if(str.length + "" > 10){
        return "OVERFLOW!"
    }
    return operation.first;
}

function typeNumber(number){
    if(operation.equals){
        operation.equals = false;
        displayValue = "";
    }
    if(!operation.equals && displayValue.length < 11){
        displayValue = displayValue + number;
        displayValueSelector.innerText = displayValue;
    }
    else{
        alert("Max number of digits reached");
    }

}

function typeOperator(operator){
    if(operation.first){
        let res = operate(Number(operation.first), Number(displayValue), operation.operator)
        displayValue = res;
    }
    operation.first = displayValue;
    displayHistory = displayValue + " "  + operator + " ";
    operation.operator = operator;
    displayHistorySelector.innerText = displayHistory;
    displayValue = "";
    displayValueSelector.innerText = "0";
}

function typeEquals(){
    operation.second = displayValue;
    let result = operate(Number(operation.first), Number(operation.second), operation.operator)
    displayValue = result;
    operation.first = null;
    displayValueSelector.innerText = displayValue;
    displayHistory = "";
    displayHistorySelector.innerHTML = "";
    operation.equals = true;
}

function typeClear(){
    displayValue = "";
    displayHistory = "";
    displayValueSelector.innerText = "0";
    displayHistorySelector.innerText = "";
    operation.first = null;
    operation.second = null;
    operation.equals = false;
    operation.operator = "";
}

function typeDot(){
    if(!displayValue.includes('.')){
        displayValue = displayValue + ".";
        displayValueSelector.innerText = displayValue;
    }
}

function typeBackspace(){
    if(displayValue != null && displayValue.length > 0){
        displayValue = displayValue.slice(0,displayValue.length - 1);
        displayValueSelector.innerText = displayValue;
    }
}
