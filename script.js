
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

function reset(){
    firstNumber=0,secondNumber=0,operatorClicked=0;
}

let firstNumber=0, secondNumber=0, operatorArithmetic, operatorAction;
let operatorClicked = 0;

const digitEvent = document.querySelectorAll(".digits");
const displayText = document.querySelector(".display");
const operatorEvent = document.querySelectorAll(".operators");

digitEvent.forEach((element) => {
    element.addEventListener("click",function(){
        let number = parseInt(element.textContent);
        displayText.textContent+=number;
        // console.log(typeof number);
        if(operatorClicked===0){
            firstNumber=firstNumber*10+number;
        }else{
            secondNumber=secondNumber*10+number;
        }
    });
});

operatorEvent.forEach(element => {
    element.addEventListener("click", function(){
        operatorClicked=1;
        let operator = element.textContent;
        // console.log(operator);
        if(operator!=="Clear" && operator!=="="){
            operatorArithmetic = operator;
            // console.log(operatorArithmetic);
            displayText.textContent+= (" "+operator+" ");
        }else if(operator==="Clear"){
            displayText.textContent="";
            reset();
        }else if(operator==="="){
            let result = operate(firstNumber,secondNumber,operatorArithmetic);
            // console.log(result);
            displayText.textContent = result.toString();
            reset();
            firstNumber=result;
        }
    });
})







// let firstNumber = prompt("Enter the first number");
// let secondNumber = prompt("Enter the second number");
// let operator = prompt("Enter the operation you want to use");

