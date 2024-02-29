function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) { 
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Can't divide a number by zero!";
    } else {
        return a / b;
    }
}

function percentage(a) {
    return a/100;
}

let variable1;
let variable2;
let operator;

function operate(variable1, variable2, operator) {
    if (operator == "+") {
        return add(variable1, variable2);
    } else if (operator == "-") {
        return subtract(variable1, variable2);
    } else if (operator == "*") {
        return multiply(variable1, variable2)
    } else if (operator == "/") {
        return divide(variable1, variable2)
    } else {
        return "Invalid operator!"
    }
}

