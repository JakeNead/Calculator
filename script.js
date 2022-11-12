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

//add events to display numbers after pressing buttons

let displayNumber = 0;

const inputNumber = (n) => {
    return displayNumber += n
}

//on click event add number to displayNumber then add dN to display

console.log(inputNumber(3))
