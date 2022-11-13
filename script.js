// const addition = (x,y) => display.textContent = x+y;
// const subtract = (x,y) => display.textContent = x-y;
// const multiply = (x,y) => display.textContent = x*y;
// const divide = (x,y) => display.textContent = x/y;
// const percent = y => display.textContent = y/100;

function operate (x,y,z) {
    switch (z) {
        case '+': return display.textContent = fitNumberToScreen(x+y);
        case '-': return display.textContent = fitNumberToScreen(x-y);
        case 'x': return display.textContent = fitNumberToScreen(x*y);
        case '/': return display.textContent = fitNumberToScreen(x/y);
        case '%': return display.textContent = fitNumberToScreen(y/100);
    }
}
const display = document.querySelector('.display')

const numberButtons = document.querySelectorAll('.num')
numberButtons.forEach(node => {
    node.addEventListener('click', () => {
        if (operatorPressed === true) {
            allClear()
        }  
        if (display.textContent.length<12) {
            if (display.textContent === '0') {
                display.textContent = node.textContent
            } else if (display.textContent != 0){
                display.textContent += node.textContent
            }
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
})

const percentButton = document.querySelector('.percent')
percentButton.addEventListener('click', () => display.textContent = display.textContent/100)

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', () => {
    if (display.textContent.split('').includes('.')) {
        return
    }
    display.textContent += '.'
})

function fitNumberToScreen (n) {
    let numArr = Array.from(n)
    console.log(numArr)
    console.log(numArr.length)
    if (numArr.length>12) {
       if (n<100000000000) {
            display.textContent = (Math.round(n*10)/10).slice(0,13)
       }
        

    }
}

//fitNumberToScreen needs some work. It might be easier to leave the numbers as 
//strings until the very last StereoPannerNode.


//operator symbols: 
//division - &#247 
//multiplication - &#215
//subtrraction - &#8722;
