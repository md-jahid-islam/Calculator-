let display = document.getElementById('display');
let currentInput = '';
let currentOperation = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function operation(op) {
    if (currentInput === '') return;
    currentOperation = op;
    currentInput += ` ${op} `;
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}
