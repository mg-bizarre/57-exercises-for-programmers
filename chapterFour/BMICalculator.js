const weight = document.getElementById('sliderWeight');
const height = document.getElementById('sliderHeight');
const labelWeight = document.getElementById('labelWeight');
const labelHeight = document.getElementById('labelHeight');
const measure = document.getElementById('measure');
const BMIoutput = document.getElementById('BMI');

BMIoutput.setAttribute('style', 'white-space: pre;');
BMIoutput.textContent = `Your BMI is: 24.22\r\nYou are within the ideal weight range.`;

labelHeight.textContent = `${height.value} cm`;
labelWeight.textContent = `${weight.value} kg`;

document.querySelectorAll('.slider').forEach((item) => {
  item.addEventListener('input', (e) => {
    let bmi;
    let text;

    measure.value == 'metric'
      ? (bmi = calcBMImetric(weight.value, height.value))
      : (bmi = calcBMIimperial(weight.value, height.value));

    if (bmi >= 18.5 && bmi <= 25) {
      text = `You are within the ideal weight range.`;
    } else if (bmi < 18.5) {
      text = `You are underweight.`;
    } else if (bmi > 25) {
      text = `You are overweight.`;
    }

    BMIoutput.textContent = `Your BMI is: ${bmi}\r\n${text}`;
  });
});

const setRange = (el, min, max, value) => {
  el.setAttribute('min', min);
  el.setAttribute('max', max);
  el.setAttribute('value', value);
};

const calcBMIimperial = (w, h) => {
  setRange(weight, '65', '330', '140');
  setRange(height, '20', '98', '63');

  let feet = `${Math.floor(h / 12)}'${h % 12}"`;
  labelHeight.textContent = feet;
  labelWeight.textContent = `${w} lbs`;

  let bmi = Math.round((w / (h * h)) * 703 * 100) / 100;
  return bmi;
};

const calcBMImetric = (w, h) => {
  setRange(weight, '30', '150', '70');
  setRange(height, '50', '250', '170');

  labelHeight.textContent = `${h} cm`;
  labelWeight.textContent = `${w} kg`;

  let bmi = Math.round((w / h / h) * 10000 * 100) / 100;
  return bmi;
};

measure.addEventListener('change', (e) => {
  let system =
    e.target.value == 'metric'
      ? calcBMImetric(weight.value, height.value)
      : calcBMIimperial(weight.value, height.value);
  return system;
});
