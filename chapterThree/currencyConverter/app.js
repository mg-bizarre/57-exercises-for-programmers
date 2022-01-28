import enterPositiveNumbersOnly from '../module';
enterPositiveNumbersOnly('.input__converter');

const selectFirst = document.getElementById('selectFirst');
const selectSecond = document.getElementById('selectSecond');
const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');

fetch('https://openexchangerates.org/api/latest.json?app_id=3729ae3c78fe4466b47dd6a09559a9ae')
  .then((response) => response.json())
  .then((data) => {
    let rates = data.rates;

    let addCurrencyOptions = (selectElement, defaultRate) => {
      let arr = Object.keys(rates);
      arr.forEach((rate) => {
        let option = document.createElement('OPTION');
        option.textContent = rate;
        option.setAttribute('value', rate);
        if (rate == defaultRate) {
          option.setAttribute('selected', 'selected');
        }
        selectElement.appendChild(option);
      });
    };
    addCurrencyOptions(selectFirst, 'USD');
    addCurrencyOptions(selectSecond, 'EUR');

    const exchange = (amountFrom, rateFrom, rateTo) => {
      let amountTo = Math.ceil(((amountFrom * Number(rates[rateTo])) / Number(rates[rateFrom])) * 100) / 100;
      return Number(amountTo);
    };

    let inputFunc = (input) => {
      if (input == inputOne) {
        inputTwo.value = exchange(input.value, selectFirst.value, selectSecond.value);
      } else if (input == inputTwo) {
        inputOne.value = exchange(input.value, selectSecond.value, selectFirst.value);
      }
    };

    document.querySelectorAll('.input__converter').forEach((item) => {
      item.addEventListener('keyup', (e) => {
        inputFunc(e.target);
      });
    });

    document.querySelectorAll('.select__converter').forEach((item) => {
      item.addEventListener('change', (e) => {
        if (e.target == selectFirst) {
          inputFunc(inputOne);
        } else if (e.target == selectSecond) {
          inputFunc(inputTwo);
        }
      });
    });
  });
