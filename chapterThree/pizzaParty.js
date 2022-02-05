import { enterIntPositiveNumbersOnly } from '../module.js';
enterIntPositiveNumbersOnly('.input__pizza');

const formPizza = document.getElementById('formPizza');
const calculatePizza = document.getElementById('btn__pizza');
const pizzaStatement = document.getElementById('pizzaStatement');
const pizzaPieces = document.getElementById('pizzaPieces');
const pizzaLeftovers = document.getElementById('pizzaLeftovers');

calculatePizza.addEventListener('click', (e) => {
  e.preventDefault();
  let people = formPizza.elements.inputPeopleCount.value;
  let pizzas = formPizza.elements.inputPizzaCount.value;
  let piecesCount = (pizzas * 8) / people;
  let leftovers = (pizzas * 8) % people;
  let pieces;

  if (piecesCount >= 1) {
    pieces = Math.ceil((pizzas * 8) / people);
  } else pieces = 0;

  if (people == 1 && pizzas == 1) {
    pizzaStatement.textContent = `${people} person with ${pizzas} pizza`;
  } else if (people == 1) {
    pizzaStatement.textContent = `${people} person with ${pizzas} pizzas`;
  } else if (pizzas == 1) {
    pizzaStatement.textContent = `${people} people with ${pizzas} pizza`;
  }

  if (pieces == 1) {
    pizzaPieces.textContent = `Each person gets ${pieces} piece of pizza.`;
  } else {
    pizzaPieces.textContent = `Each person gets ${pieces} pieces of pizza.`;
  }

  if (leftovers == 1) {
    pizzaLeftovers.textContent = `There are ${leftovers} leftover piece.`;
  } else {
    pizzaLeftovers.textContent = `There are ${leftovers} leftover pieces.`;
  }
});
