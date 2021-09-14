operators.forEach(operator => {
    operator.addEventListener("click", () => {
        operation = operator.textContent;
        display.textContent = operation;
        val1 = tempVal1;
        /* displayVariable1 = ""; */
        numbers.forEach(button => {
            button.addEventListener("click", () => {
                val1 = tempVal1;
                val2 = "";
                tempVal2 += button.textContent;
                display.textContent = tempVal2;
                val2 = tempVal2;
            });
        });
    });
}); 


numbers.forEach(button => {
    button.addEventListener("click", () => {
        tempVal1 = "";
        tempVal1 += button.textContent;
        display.textContent = tempVal1;
    });
});

function createNumberListeners(type, callback) {
    numbers.forEach(number => {
        number.addEventListener(type, e => {
            callback(e);
        })
    })
}

createNumberListeners("click", e => {
    console.log("hi");
})

function setNumbers