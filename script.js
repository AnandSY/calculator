
function add(firstNumber,secondNumber){
    return firstNumber+secondNumber;
}

function subtract(firstNumber,secondNumber){
    return firstNumber-secondNumber;
}

function multiply(firstNumber,secondNumber){
    return firstNumber*secondNumber;
}

function divide(firstNumber,secondNumber){
    return firstNumber/secondNumber;
}

function operate(firstNumber,secondNumber,operator){
    if(operator==="+"){
        return add(firstNumber,secondNumber);
    }else if(operator==="-"){
        return subtract(firstNumber,secondNumber);
    }else if(operator==="*"){
        return multiply(firstNumber,secondNumber);
    }else if(operator==="/"){
        return divide(firstNumber,secondNumber);
    }
}

// let firstNumber = prompt("Enter the first number");
// let secondNumber = prompt("Enter the second number");
// let operator = prompt("Enter the operation you want to use");

