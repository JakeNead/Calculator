const addition = (x,y) => x+y;
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;
const percent = x => x/100;

function operate (x,y,z) {
    switch (z) {
        case '+': return add(x,y);
        case '-': return subtract(x,y)
        case '*': return multiply(x,y)
        case '/': return divide(x,y)
        case '%': return percent(x)
    }
}
console.log(operate(2,4,'*'))
let displayValue = 0
const display = document.querySelector('.display')

const numberButtons = document.querySelectorAll('.num')
// Number buttons populate the screen and store the value in numberButtons
numberButtons.forEach(node => {
    node.addEventListener('click', () => {
        if (operatorPressed === true) {
            allClear()
        }  
        if (displayValue == 0) {
            display.textContent = node.textContent
            displayValue = node.textContent
        } else if (displayValue != 0){
            display.textContent += node.textContent
            displayValue += node.textContent
        }
    })
})

let firstOperand = 0
let secondOperand = 0
let operator = 0
let operatorPressed = false;

// AC button event listener to clear the calculator
const ac = document.querySelector('.ac')
let allClear = () => {
    displayValue = 0
    display.textContent = 0
    firstOperand = 0
    secondOperand = 0
    operatorPressed = false
}
ac.addEventListener('click', () => allClear())

//Operator event listeners
const operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach(node => {
    node.addEventListener('click', () => {
        operatorPressed = true;
        firstOperand = displayValue
        operator = node.textContent
    })
})

//     press number, assign dV and node text
//press plus, assign operand and operator values in variables.
    //event listener boolean shows operator pressed and will clear before new nums
//press second number, replaces dV and node
//press more numbers if desired
//press equal, call the operator func with operands
//dV and node equal result and store the operand in the firstOp variable

//ac should also clear operator pressed boolean