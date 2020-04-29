let previousLine = document.getElementById('inputLine');
let currentLine = document.getElementById('resultLine');
let operator = '';
let a = 0;
let b = 0;
let c = 0;

//Button Functions

function clear() {
    previousLine.innerText = '';
    currentLine.innerText = 0;
}

function decimal() {
    if (!currentLine.textContent.includes('.')) {
        currentLine.textContent += '.';
    }
}

function plusMinus() {
    currentLine.innerText *= (-1);
}

function percent() {
    currentLine.innerText *= 100
    currentLine.innerText += '%'

}

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

//Clicking Button Functionality 

document.addEventListener('click', event => {
    let target = event.target;

    function numberButton() {
        currentLine.innerText += target.innerText;
        currentLine.innerText = Number(currentLine.innerText);
    }
    function operatorButton() {
        if (target == document.getElementById('+')) {
                operator = '+';
                a = Number(currentLine.innerText);
                previousLine.innerText = currentLine.innerText + ' +';
                currentLine.innerText = '';
        }   else if (target == document.getElementById('-')) {
                operator = '-';
                a = Number(currentLine.innerText);
                previousLine.innerText = currentLine.innerText + ' -';
                currentLine.innerText = '';
        }   else if (target == document.getElementById('x')) {
                operator = 'x';
                a = Number(currentLine.innerText);
                previousLine.innerText = currentLine.innerText + ' x';
                currentLine.innerText = '';
        }    else if (target == document.getElementById('÷')) {
                operator = '÷';
                a = Number(currentLine.innerText);
                previousLine.innerText = currentLine.innerText + ' ÷';
                currentLine.innerText = '';
            }
        }
    if (
        target == document.getElementById('1') ||
        target == document.getElementById('2') ||
        target == document.getElementById('3') ||
        target == document.getElementById('4') ||
        target == document.getElementById('5') ||
        target == document.getElementById('6') ||
        target == document.getElementById('7') ||
        target == document.getElementById('8') ||
        target == document.getElementById('9') ||
        target == document.getElementById('0')
    )   {
        numberButton();
    }   else if (target == document.getElementById('.')) {
        decimal();
    }   else if (
        target == document.getElementById('+') ||
        target == document.getElementById('-') ||
        target == document.getElementById('x') ||
        target == document.getElementById('÷')
    )   {
        operatorButton();
    }   else if (target == document.getElementById('clear')) {
        clear();
    }   else if (target == document.getElementById('=')) {
        b = Number(currentLine.innerText)
        c = operate(operator, a, b);
        let text = c.toString();
        if (text.includes('.')) {
            let index = text.indexOf('.');
            if ((text.length - index - 1) > 4) {
                c = c.toFixed(4);
            }
        }
        previousLine.innerText += ' ' + currentLine.innerText;
        currentLine.innerText = c;        
    }   else if (target == document.getElementById('+/-')) {
        plusMinus();
    }   else if (target == document.getElementById('%')) {
        percent();
    }
});