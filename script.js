const addition = (x,y) => display.textContent = x+y;
const subtract = (x,y) => display.textContent = x-y;
const multiply = (x,y) => display.textContent = x*y;
const divide = (x,y) => display.textContent = x/y;
const percent = y => display.textContent = y/100;

function operate (x,y,z) {
    switch (z) {
        case '+': return addition(x,y);
        case '-': return subtract(x,y);
        case '*': return multiply(x,y);
        case '/': return divide(x,y);
        case '%': return percent(x);
    }
}
const display = document.querySelector('.display')

const numberButtons = document.querySelectorAll('.num')
numberButtons.forEach(node => {
    node.addEventListener('click', () => {
        if (operatorPressed === true) {
            allClear()
        }  
        if (display.textContent == 0) {
            display.textContent = node.textContent
            // displayValue = node.textContent
        } else if (display.textContent != 0){
            display.textContent += node.textContent
            // displayValue += node.textContent
        }
    })
})

let firstOperand = 0
let operator = ''
let operatorPressed = false;

// AC button event listener to clear the calculator
const ac = document.querySelector('.ac')
let allClear = () => {
    // displayValue = 0
    display.textContent = 0
    // firstOperand = 0
    operatorPressed = false
}
ac.addEventListener('click', () => allClear())

//Operator event listeners
const operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach(node => {
    node.addEventListener('click', () => {
        operatorPressed = true;
        firstOperand = display.textContent;
        operator = node.textContent;
    })
})
const equalButton = document.querySelector('.equal')
equalButton.addEventListener('click', () => {
    operate(+firstOperand, +display.textContent, operator)
    operatorPressed = false
    console.log(firstOperand, display.textContent, operator)
})

const percentButton = document.querySelector('.percent')
percentButton.addEventListener('click', () => display.textContent = firstOperand/100)

//     press number, assign dV and node text
//press plus, assign operand and operator values in variables.
    //event listener boolean shows operator pressed and will clear before new nums
//press second number, replaces dV and node
//press more numbers if desired
//press equal, call the operator func with operands
//dV and node equal result and store the operand in the firstOp variable

//ac should also clear operator pressed boolean







//operator symbols: 
//division - &#247 
//multiplication - &#215
//subtrraction - &#8722;
