let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number;
  updateDisplay();
}

function chooseOperator(operator) {
  if (currentOperand === '') return;
  if (previousOperand !== '') calculate();
  operation = operator;
  previousOperand = currentOperand;
  currentOperand = '';
}

function calculate() {
  let computation;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case '+':
      computation = prev + curr;
      break;
    case '-':
      computation = prev - curr;
      break;
    case '*':
      computation = prev * curr;
      break;
    case '/':
      computation = prev / curr;
      break;
    default:
      return;
  }

  currentOperand = computation.toString();
  operation = null;
  previousOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = currentOperand || '0';
}
