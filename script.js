let firstOperand = 0
let operator = ''
let operatorPressed = false;

function operate (x,y,z) {
    switch (z) {
        case '+': return display.textContent = fitNumberToScreen(x+y);
        case '-': return display.textContent = fitNumberToScreen(x-y);
        case 'x': return display.textContent = fitNumberToScreen(x*y);
        case '/': return display.textContent = fitNumberToScreen(x/y);
        case '%': return display.textContent = fitNumberToScreen(y/100);
    }
}

function fitNumberToScreen (n) {
    let numberArray = String(n)
    if (numberArray.length <= 12) {
        return display.textContent = numberArray
    } else if (numberArray.length > 12) {
       if (n<100000000000) {
            return display.textContent = numberArray.slice(0,13)
       } else {
        return display.textContent = 'Error # too big'
       }
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
            } else if (display.textContent != '0'){
                display.textContent += node.textContent
            }
        }
    })
})

const ac = document.querySelector('.ac')
const allClear = () => {
    display.textContent = 0
    // firstOperand = 0
    operatorPressed = false
}
ac.addEventListener('click', () => allClear())

const numberSign = document.querySelector('.numberSign')
numberSign.addEventListener('click', () =>  {
    display.textContent = String(+display.textContent*-1)  
})

const percentButton = document.querySelector('.percent')
percentButton.addEventListener('click', () => display.textContent = display.textContent/100)

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


const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', () => {
    if (display.textContent.split('').includes('.')) {
        return
    }
    display.textContent += '.'
})




//operator symbols: 
//division - &#247 
//multiplication - &#215
//subtraction - &#8722;
