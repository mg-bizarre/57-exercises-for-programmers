import enterPositiveNumbersOnly from '../module.js';
enterPositiveNumbersOnly('.input__item');

const addItem = document.getElementById('btn__addItem');
let checkoutStatement = document.getElementById('checkoutStatement');
let price = document.getElementById('inputPrice');
let quantity = document.getElementById('inputQuantity');
// input   processing   output
let subtotal = 0;
let tax;
let total;

addItem.addEventListener('click', (e) => {
  e.preventDefault();
  if (price.value && quantity.value) {
    let item = document.createElement('LI');

    let itemPrice = Math.round(price.value * quantity.value * 100) / 100;
    subtotal += itemPrice;
    tax = Math.round(subtotal * 0.055 * 100) / 100;
    total = Math.round((subtotal + tax) * 100) / 100;

    item.textContent = `Item price: € ${price.value}, item quantity: ${quantity.value}`;
    item.classList.add('list__item');
    document.getElementById('listCheckout').appendChild(item);
    checkoutStatement.setAttribute('style', 'white-space: pre;');
    checkoutStatement.textContent = `Subtotal: € ${subtotal}\r\nTax: € ${tax}\r\nTotal: € ${total}`;
    price.value = '';
    quantity.value = '';
  }
});
