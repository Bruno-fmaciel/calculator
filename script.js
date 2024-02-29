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
    if (b == 0) {
        return display.textContent = "Can't divide a number by zero!";
    } else {
        return a / b;
    }
}

function percentage(a) {
    return a/100;
}

function updateNumber(number) {
    if (variable1.length <= 9) {
        variable1 += number;
    }
}

function updateOperator(op) {
    operator = op;
    variable2 = variable1;
    variable1 = "";
}

function floatDot() {
    if (!variable1.includes(".")) {
        variable1 += '.';
    }
}

let variable1 = '';
let variable2= '';
let operator = '';

function operate() {
    variable1 = parseFloat(variable1);
    variable2 = parseFloat(variable2);
    if (operator == "+") {
        return add(variable2, variable1);
    } else if (operator == "-") {
        return subtract(variable2, variable1);
    } else if (operator == "x") {
        return multiply(variable2, variable1);
    } else if (operator == "÷") {
        return divide(variable2, variable1);
    } else {
        return "Invalid operator!";
    }
};


const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector('.clear');
const operation = document.querySelector('.operate');
const basicOperators = document.querySelectorAll('.basic-operator');
const percentages= document.querySelector(".operator");
const dot = document.querySelector(".dot");

numbers.forEach(function(number) {
    number.addEventListener('click', function(e) {
        display.innerHTML = "" 
        updateNumber(number.innerHTML)
        display.innerHTML = variable1;
    });
})

basicOperators.forEach(function(basicOperator) {
    basicOperator.addEventListener('click',function () {
        updateOperator(basicOperator.innerHTML);
        display.innerHTML = operator;
    });
})

clear.addEventListener('click',function () {
    variable1 = "";
    variable2 = "";
    operator = "";
    display.innerHTML = ""
} );


operation.addEventListener('click', function() {
    display.innerHTML = operate();
    variable1 = "";
    variable2 = '';
    operator = '';
});

percentages.addEventListener('click', function () {
    per = percentage(variable1);
    display.innerHTML = per;
})

dot.addEventListener('click', function() {
    floatDot();
})



