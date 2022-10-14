const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

const substract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

const multiply = function(firstNumber, secondNumber){
  return firstNumber * secondNumber;
}

const divide = function(firstNumber, secondNumber) {
  if (secondNumber == 0) {
    btnsArray.forEach(element => element.setAttribute('disabled', true));
    clearBtn.removeAttribute('disabled');
  }
  return firstNumber/secondNumber;
}

const operate = function(operator, firstNumber, secondNumber) {
  if (operator == '+') {
    return add(firstNumber, secondNumber);
  }
  else if (operator == '-') {
    return substract(firstNumber, secondNumber);
  }
  else if (operator == '*') {
    return multiply(firstNumber, secondNumber);
  }
  else if (operator == '/') {
    return divide(firstNumber, secondNumber);
  }
}

const isDecimal = function(number) {
  return number * 10000000 % 10000 != 0 
}

const display = document.querySelector('h2');
const btns = document.querySelectorAll('button.btns');
const btnsArray = Array.from(btns);
const clearBtn = document.getElementById('clearBtn');

let temp = '';
let currentNumber = 0;
let lastOperation = '+';

btnsArray.forEach(element => element.addEventListener('click', e => {
  let currentSign = e.target.textContent;
  display.textContent += currentSign;
  if (currentSign == '+' || currentSign == '-' || currentSign == '*' || currentSign == '/') {
    currentNumber = operate(lastOperation, currentNumber, parseInt(temp));
    lastOperation = currentSign;
    temp = '';
  } 
  else if (currentSign == '=') {
    if (temp == '') {
      display.textContent = '';
      return;
    }
    currentNumber = operate(lastOperation, currentNumber, parseInt(temp));
    if (isDecimal(currentNumber)) {
      currentNumber = currentNumber.toFixed(3);
    }
    if (currentNumber == 'Infinity') {
      display.textContent = 'Error';
      return
    }
    display.textContent = currentNumber;
    lastOperation = '+';
    temp = '';
    temp += currentNumber;
    currentNumber = 0;
    
  }
  else if (currentSign == 'C') {
    display.textContent = '';
    temp = '';
    currentNumber = 0;
    lastOperation = '+';
    btnsArray.forEach(element => element.removeAttribute('disabled'));
  }
  else {
    temp += e.target.textContent;
  }
  
}));
