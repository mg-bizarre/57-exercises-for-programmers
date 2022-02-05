import enterPositiveNumbersOnly from '../module.js';
enterPositiveNumbersOnly('.input__interest');

const principalAmount = document.getElementById('inputPrincipal');
const interestRate = document.getElementById('inputInterest');
const years = document.getElementById('inputYears');
const compounded = document.getElementById('inputCompounded');
const computeInterest = document.getElementById('btn__computeInterest');
const interestStatement = document.getElementById('interestStatement');

const calculateSimpleInterest = (rate, principal, numberOfYears) => {
  let calculation = Math.ceil(((rate / 100) * principal * numberOfYears + Number(principal)) * 100) / 100;
  return calculation;
};
const calculateCompoundInterest = (rate, principal, numberOfYears, compoundedTimes) => {
  let calculation =
    Math.ceil(principal * (1 + rate / 100 / compoundedTimes) ** (compoundedTimes * numberOfYears) * 100) / 100;
  return calculation;
};

computeInterest.addEventListener('click', (e) => {
  e.preventDefault();
  let number;
  if (compounded.value) {
    number = Number(
      calculateCompoundInterest(interestRate.value, principalAmount.value, years.value, compounded.value)
    );
  } else {
    number = Number(calculateSimpleInterest(interestRate.value, principalAmount.value, years.value));
    compounded.value = 0;
  }

  let worth = new Intl.NumberFormat().format(number);

  if (number && isNaN(number) == false) {
    interestStatement.innerText = `€${principalAmount.value} invested at ${interestRate.value}% for ${years.value} years
    compounded ${compounded.value} times per year is €${worth}.`;
  } else {
    interestStatement.innerText = `Please, make sure all the numbers are valid.`;
  }
});
