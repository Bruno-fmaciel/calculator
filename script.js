function add(a, b) {
    return c + d;
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
    c = parseFloat(variable1);
    d = parseFloat(variable2);
    if (operator == "+") {
        return add(d, c);
    } else if (operator == "-") {
        return subtract(d, c);
    } else if (operator == "x") {
        return multiply(d, c);
    } else if (operator == "÷") {
        return divide(d, c);
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
    variable1 = display.innerHTML;
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



