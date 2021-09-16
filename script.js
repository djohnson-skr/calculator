/* --- GLOBAL VARIABLES --- */
let tempZero = "0";
let tempVal = "";
let val2 = "";
let val1 = "";
let operation = "";
let result = "";
let precision = 10; 
let numberSize = 8;

/* --- DOM OBJECTS --- */
const buttons = document.querySelectorAll(".calc-buttons button");
const display = document.getElementById("display"); 
const operators = document.querySelectorAll(".operator");
const equalSign = document.getElementById("equalSign");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

display.textContent = tempZero; // set initial value on display

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        // ensure that only 1 decimal can be used
        if (button.textContent == ".") {
            if (!/\./.test(tempVal)) {
                tempVal += ".";
                display.textContent = tempVal;
            };
        } 
        else {
            // functionality delete button when a result is already calculated
            if (result != "" && button.textContent == "Delete") {
                result = result.toString();
                result = result.substr(0, result.length - 1);
                tempVal = result;
                display.textContent = tempVal;
            }
            // functionality of delete button
            else if (button.textContent == "Delete") {
                tempVal = tempVal.substr(0, tempVal.length - 1);
                display.textContent = tempVal;
            }
            // update the display with button press
            else {
                tempVal += button.textContent;
                tempVal = tempVal.substring(0,numberSize); // set limit on number size
                display.textContent = tempVal;
                if (tempVal.length == numberSize) {
                    tempVal = tempVal + "1"; // ensure max number does not have its last digit removed
                };
                // ensure proper functionaltiy when using result as the first number in calculation
                if (tempVal == "+" || tempVal == "-" || tempVal == "×" || tempVal == "÷") {
                    tempVal = result + "1"; // ensure the full result value remains
                }; 
            };
        };
        // define operater and show it on the display
        if (button.textContent == "+" || button.textContent == "-" || button.textContent == "×" || button.textContent == "÷") {
            operation = button.textContent;
            val1 = tempVal.substring(0, tempVal.length - 1);
            tempVal = "";
            display.textContent = operation;
        };
        // grab the second value and perfrom calculation
        if (button.textContent == "=") {
            val2 = tempVal.substring(0, tempVal.length - 1);
            operate(operation, val1, val2);
            display.textContent = result;
            clearVariables();
        };
    });
});

clearButton.addEventListener("click", function() {
    clearVariables();
    display.textContent = tempZero;
}, false);

/* --- FUNCTIONS --- */

function add(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    result = Math.round((a+b).toPrecision(precision) * 100000) / 100000;
};
function subtract(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    result = Math.round((a-b).toPrecision(precision) * 100000) / 100000;;
};
function multiply(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    result = parseFloat((a*b).toPrecision(precision));
    // convert large values to e notation
    if (result > 100000000) {
        result = parseFloat(result).toExponential();
    };
};
function divide(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (b === 0) {
        result = "No No No";
    }
    else {
        result = Math.round((a/b).toPrecision(precision) * 100000) / 100000;
    };
};
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
    };
};
function clearVariables() {
    tempZero = "0";
    tempVal = "";
    val2 = "";
    operation = "";
};