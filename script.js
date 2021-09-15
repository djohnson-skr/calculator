let tempZero = "0";
let tempVal = "";
let val2 = "";
let val1 = "";
let operation = "";
let result = "";
let precision = 10; 
let numberSize = 8;
let newDisplayValue = "";

const buttons = document.querySelectorAll(".calc-buttons button");
const display = document.getElementById("display"); 
const operators = document.querySelectorAll(".operator");
const equalSign = document.getElementById("equalSign");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

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
            tempVal = tempVal.substring(0,numberSize);
            display.textContent = tempVal;
            if (tempVal.length == numberSize) {
                tempVal = tempVal + "1";
            };
            if (tempVal == "+" || tempVal == "-" || tempVal == "×" || tempVal == "÷") {
                tempVal = result + "1";
            };  
        }
        if (button.textContent == "+" || button.textContent == "-" || button.textContent == "×" || button.textContent == "÷") {
            operation = button.textContent;
            val1 = tempVal.substring(0, tempVal.length - 1);
            tempVal = "";
            display.textContent = operation;
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
    a = parseFloat(a);
    b = parseFloat(b);
    result = (a+b).toPrecision(precision);
}

function subtract(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    result = (a-b).toPrecision(precision);
}

function multiply(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    result = parseFloat((a*b).toPrecision(precision));
    if (result > 100000000) {
        result = parseFloat(result).toExponential();
    }
}

function divide(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    result = Math.round((a/b).toPrecision(precision) * 100000) / 100000;
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