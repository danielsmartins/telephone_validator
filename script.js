const inputField = document.getElementById('user-input');
const validateBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('clear-btn');
const outputDiv = document.getElementById('results-div');

function validatePhoneNumber(value) {
  if (value.trim() === '') {
    alert('Please provide a phone number');
    return;
  }

  const regexPattern = new RegExp(
    '^(1\\s?)?(\\([0-9]{3}\\)|[0-9]{3})[\\s-]?[0-9]{3}[\\s-]?[0-9]{4}$'
  );

  const resultMessage = document.createElement('p');
  resultMessage.classList.add('output-message');

  if (regexPattern.test(value)) {
    resultMessage.style.color = '#008000';
    resultMessage.textContent = `Valid US number: ${value}`;
  } else {
    resultMessage.style.color = '#cc0000';
    resultMessage.textContent = `Invalid US number: ${value}`;
  }

  outputDiv.appendChild(resultMessage);
}

validateBtn.addEventListener('click', () => {
  validatePhoneNumber(inputField.value);
  inputField.value = '';
});

inputField.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    validatePhoneNumber(inputField.value);
    inputField.value = '';
  }
});

resetBtn.addEventListener('click', () => {
  outputDiv.innerHTML = '';
});
