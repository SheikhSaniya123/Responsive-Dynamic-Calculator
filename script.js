const buttons = document.querySelectorAll('.btn');
const resultDisplay = document.getElementById('result');
const historyDisplay = document.getElementById('history');

let currentInput = '';
let history = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
      history = '';
      updateDisplay();
    } else if (value === 'DEL') {
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    } else if (value === '=') {
      try {
        const result = eval(currentInput);
        history = currentInput + ' =';
        currentInput = result.toString();
      } catch (e) {
        currentInput = 'Error';
      }
      updateDisplay();
    } else {
      currentInput += value;
      updateDisplay();
    }
  });
});

function updateDisplay() {
  resultDisplay.textContent = currentInput || '0';
  historyDisplay.textContent = history;
}
