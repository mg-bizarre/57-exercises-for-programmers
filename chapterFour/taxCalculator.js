import enterPositiveNumbersOnly from '../module.js';
enterPositiveNumbersOnly('.numbers-only');

const inputOrder = document.getElementById('inputOrder');
const inputState = document.getElementById('inputState');
const calculateTax = document.getElementById('btn-taxCalc');
const taxStatement = document.getElementById('taxStatement');

calculateTax.addEventListener('click', (e) => {
  e.preventDefault();
  let stateEntered = inputState.value.toUpperCase();
  if (stateEntered && inputOrder.value) {
    for (let state of states) {
      if (stateEntered == state.abr || stateEntered == state.name.toUpperCase()) {
        let tax = Math.round(inputOrder.value * state.tax) / 100;
        let total = Number(inputOrder.value) + tax;

        taxStatement.setAttribute('style', 'white-space: pre;');
        taxStatement.textContent = `The subtotal is €${inputOrder.value}.\r\nThe tax is €${tax}.\r\nThe total is €${total}`;

        inputState.value = '';
        inputOrder.value = '';
        return;
      }
    }
  }
  taxStatement.textContent = 'Please, enter valid values.';

  inputState.value = '';
  inputOrder.value = '';
});
