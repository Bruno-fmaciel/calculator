function calculator() {
    // query selectors
    const previousScreen = document.querySelector('.previous-screen');
    const currentScreen = document.querySelector('.current-screen');
    const floatDot = document.querySelector('.dot');
    const del = document.querySelector('.delete');
    const equals = document.querySelector('.operate');
    const clear = document.querySelector('.clear');

    // selector All
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.basic-operator');

    // Variables declaration
    let currentOperand = '';
    let previousOperand = '';
    let operator = null;

    //Events
    function handleButtons(){
        numbers.forEach(button => {
            button.addEventListener('click', () => {
                currentOperand === 0 ? currentOperand = '':'';
                if (button.textContent === '.' && currentOperand.includes('.')) return
                currentOperand += button.textContent;
                updateDisplay(); 
            })
        })
        
        operators.forEach(op => {
            op.addEventListener('click', () => {
                if (currentOperand === '') return
                operator = op.textContent;
                operate();
                updateDisplay();
            })
        })

        clear.addEventListener('click', () => {
            previousOperand = '';
            currentOperand = 0;
            operator = null;
            updateDisplay();
        })

        del.addEventListener('click',() => {
            let temp;
            if (currentOperand === "You can't divide by zero!") {
                currentOperand = 0;
                temp = currentOperand;
            }else {
                temp = currentOperand.toString().slice(0,-1)
            }
            if (temp === '' || temp === 0) {
                temp = 0;
                currentOperand = temp;
                updateDisplay();
            }else {
                currentOperand = parseFloat(temp);
                updateDisplay();
            }
        })

        equals.addEventListener('click', () => {
            calculateResults();
            updateDisplay();
        })

        floatDot.addEventListener('click',() => {
            if (currentOperand.includes('.'))return
            currentOperand += '.';
        })

    }

    //Functions
    function updateDisplay(){
        currentScreen.textContent = currentOperand;
        previousScreen.textContent = previousOperand;
    }



    function operate(){
        if (currentOperand === '') return
        if (previousOperand !== '') {
            calculateResults()
        }
        previousOperand = `${currentOperand} ${operator}`;
        currentOperand = '';
    }

    function calculateResults() {
        let curr = parseFloat(currentOperand);
        let prev = parseFloat(previousOperand);
        let result;

        if (isNaN(prev) || isNaN(curr)) return
        operator === '+' ? result = prev + curr
        :operator === '-' ? result = prev - curr
        :operator === 'x' ? result = prev * curr
        :operator === '÷' && curr===0 ? result = "You can't divide by zero!"
        :operator === '÷' ? result = prev / curr
        :'';

        currentOperand = result;
        operator = null;
        previousOperand = '';

    }

    handleButtons();
}

calculator();