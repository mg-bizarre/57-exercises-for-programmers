import { enterIntPositiveNumbersOnly } from '../module.js';
enterIntPositiveNumbersOnly('.month__input');

const langSelect = document.getElementById('languages');
const monthInput = document.getElementById('monthInput');
const labelInput = document.getElementById('labelInput');
const labelLang = document.getElementById('labelChooseLang');
const output = document.getElementById('monthsStatement');

for (let lang of months) {
  const option = document.createElement('option');
  option.innerText = lang.language;
  langSelect.appendChild(option);
}

let setOutput = (number, language) => {
  if (number) {
    if (number > 0 && number < 13) {
      output.innerText = `${language.output} ${language[number]}.`;
    } else if (number) {
      output.innerText = language.error;
    }
  }
};

let setLanguage = () => {
  for (let lang of months) {
    if (langSelect.value == lang.language) {
      labelLang.innerText = `${lang.choose}:`;
      labelInput.innerText = `${lang.input}:`;

      setOutput(monthInput.value, lang);
    }
  }
};
setLanguage();

langSelect.addEventListener('change', () => {
  setLanguage();
});

monthInput.addEventListener('keyup', (e) => {
  // if (
  //   !(e.key >= 0 || e.key <= 9) &&
  //   e.key != 'Backspace' &&
  //   e.key != 'Delete' &&
  //   e.key != 'ArrowLeft' &&
  //   e.key != 'ArrowRight'
  // ) {
  //   e.preventDefault();
  // }
  let value = e.target.value;

  for (let lang of months) {
    if (langSelect.value == lang.language) {
      setOutput(value, lang);
    }
  }
});
