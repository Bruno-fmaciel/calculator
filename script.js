function add(a, b) {
    c = parseFloat(a);
    d = parseFloat(b);
    return c + d;
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

let variable1 = '';
let variable2= '';
let operator = '';

function operate() {
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
    variable1 = ""
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





