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

const display = document.querySelector('h2');
const btns = document.querySelectorAll('button.btns');
const btnsArray = Array.from(btns);

clearBtn.addEventListener('click', () => display.textContent = '');
btnsArray.forEach(element => element.addEventListener('click', e => {
  display.textContent += e.target.textContent;

}));
