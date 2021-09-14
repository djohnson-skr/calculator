let tempZero = "0";
let tempVal = "";
let tempVal2 = "";
let val2 = "";
let val1 = "";
let operation = "";
let result = "";

const buttons = document.querySelectorAll(".calc-buttons button");
const display = document.getElementById("display"); 
const operators = document.querySelectorAll(".operator");
const equalSign = document.getElementById("equalSign");
const clearButton = document.getElementById("clear");

display.textContent = tempZero; // set initial value on display

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        if (button.textContent == ".") {
            if (!/\./.test(tempVal)) {
                tempVal += ".";
                display.textContent = tempVal;
            };
        } 
        else {
            tempVal += button.textContent;
            display.textContent = tempVal;
        }
        if (button.textContent == "+" || button.textContent == "-" || button.textContent == "×" || button.textContent == "÷") {
            operation = button.textContent;
            val1 = tempVal.substring(0, tempVal.length - 1);
            tempVal = "";
            display.textContent = tempVal;
        }
        if (button.textContent == "=") {
            val2 = tempVal.substring(0, tempVal.length - 1);
            operate(operation, val1, val2);
            display.textContent = result;
            clearVariables();
        }
    })
})


clearButton.addEventListener("click", function() {
    clearVariables();
    display.textContent = tempZero;
}, false);

/* --- FUNCTIONS --- */

function add(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    result = a+b;
}

function subtract(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    result = a-b;
}

function multiply(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    result = a*b;
}

function divide(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    result = a/b;
}

function operate(operator,a,b) {
    switch(operator) {
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
        case "×":
            return multiply(a,b)
        case "÷":
            return divide(a,b) 
    }
}

function clearVariables() {
    tempZero = "0";
    tempVal2 = "";
    tempVal = "";
    val2 = "";
    operation = "";
}