function calculate(operator) {
  const num1 = document.getElementById('number1').value;
  const num2 = document.getElementById('number2').value;

  if (num1 === '' || num2 === '') {
    alert('Two input can not empty!');
    return;
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (operator === '/' && n2 === 0) {
    alert('Division by 0 is not allowed!');
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      const evenOrOdd = result % 2 === 0 ? 'even' : 'odd';
      alert(`The result of the division is ${evenOrOdd}`);
      break;
    default:
      result = 'Invalid operator';
  }

  document.getElementById('result').textContent = `Result: ${result}`;
}
