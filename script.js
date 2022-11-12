function add (x,y) {
    return x+y;
}

function subtract (x,y) {
    return x-y;
}

function multiply (x,y) {
    return x*y;
}

function divide (x,y) {
    return x/y;
}

function percent (x) {
    return x/100;
}

function operate (x,y,z) {
    switch (z) {
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y)
        case '*':
            return multiply(x,y)
        case '/':
            return divide(x,y)
        case '%':
            return percent(x)
    }
}

let displayValue = 0

const numberButtons = document.querySelectorAll('.num')
const display = document.querySelector('.display')

function input () {
    numberButtons.forEach(node => {
        node.addEventListener('click', (n) => {
            display.textContent = node.textContent
            displayValue = node.textContent
        })
    })
}

input()
