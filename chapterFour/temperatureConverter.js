import { enterNumbersOnly } from '../module.js';
enterNumbersOnly('.input__tconverter');

const C = document.getElementById('inputC');
const F = document.getElementById('inputF');
const K = document.getElementById('inputK');

const CtoF = (c) => {
  let amount = Math.round(((c * 9) / 5 + 32) * 100) / 100;
  return amount;
};
const FtoC = (f) => {
  let amount = Math.round((((f - 32) * 5) / 9) * 100) / 100;
  return amount;
};
const CtoK = (c) => {
  let amount = Math.round((Number(c) + 273.15) * 100) / 100;
  return amount;
};
const KtoC = (k) => {
  let amount = Math.round((k - 273.15) * 100) / 100;
  return amount;
};

document.querySelectorAll('.input__tconverter').forEach((item) => {
  item.addEventListener('keyup', (e) => {
    if (e.target.value) {
      switch (e.target) {
        case C:
          F.value = CtoF(e.target.value);
          K.value = CtoK(e.target.value);
          break;
        case F:
          C.value = FtoC(e.target.value);
          K.value = CtoK(C.value);
          break;
        case K:
          C.value = KtoC(e.target.value);
          F.value = CtoF(C.value);
          break;
      }
    }
  });
});
