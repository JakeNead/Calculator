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
const display = document.querySelector('.display')

const numberButtons = document.querySelectorAll('.num')
// Number buttons populate the screen and store the value in numberButtons
numberButtons.forEach(node => {
    node.addEventListener('click', () => {
        if (displayValue == 0) {
            display.textContent = node.textContent
            displayValue = node.textContent
        } else if (displayValue != 0){
            display.textContent += node.textContent
            displayValue += node.textContent
        }
    })
})

// AC button event listener to clear the calculator
const ac = document.querySelector('.ac')
ac.addEventListener('click', () => {
    displayValue = 0
    display.textContent = 0
})


//press number, assign dV and node
//press plus, store first operand and operator in a variable
    //event listener shows operator pressed and will clear before new nums
//press second number, replaces dV and node
//press more numbers if desired
//press equal, call the operator func with both numbers
//dV and node equal result