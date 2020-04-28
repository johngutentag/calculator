//Basic Math Functions

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if(b===0) {
        //Add in return error
    }
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b)
    }
    if (operator === '-') {
        return subtract(a, b)
    }
    if (operator === 'x') {
        return multiply(a, b)
    }
    if (operator === '÷') {
        return divide(a, b)
    }
}