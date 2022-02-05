import enterPositiveNumbersOnly from '../module.js';

enterPositiveNumbersOnly('.input__roomArea');
//Area of a Rectangular Room
let roomAreaStatement = document.getElementById('roomAreaStatement');
let measure = document.getElementById('measure');
let roomShape = document.getElementById('select__roomShape');
let paintStatement = document.getElementById('paintStatement');

const convertToSquare = (to, measurement) => {
  if (to == 'meters') {
    return Math.round(measurement * 0.09290304 * 100) / 100;
  } else if (to == 'feet') {
    return Math.round((measurement / 0.09290304) * 100) / 100;
  }
};
const areaOutput = (area) => {
  let areaConverted;
  let feetOrMeters;
  let theOtherMeasure;
  let gallons;
  if (area) {
    if (measure.value == 'feet') {
      gallons = Math.ceil(area / 350);
      areaConverted = convertToSquare('meters', area);
      feetOrMeters = 'feet';
      theOtherMeasure = 'meters';
    } else if (measure.value == 'meters') {
      gallons = Math.ceil(area / 32.5);
      areaConverted = convertToSquare('feet', area);
      feetOrMeters = 'meters';
      theOtherMeasure = 'feet';
    }
    roomAreaStatement.setAttribute('style', 'white-space: pre;');
    paintStatement.setAttribute('style', 'white-space: pre;');
    roomAreaStatement.textContent = `You entered dimensions of ${length} ${feetOrMeters} by ${width} ${feetOrMeters}.\r\nThe area is\r\n${area} square ${feetOrMeters}\r\n${areaConverted} square ${theOtherMeasure}`;
    paintStatement.textContent = `You will need to purchase ${gallons} gallons of paint to cover ${area} square ${feetOrMeters}.`;
  }
};

let length;
let width;
let calculateAreaRectangular = () => {
  length = document.getElementById('inputLength').value;
  width = document.getElementById('inputWidth').value;
  let area = Math.round(length * width * 1000) / 1000;
  areaOutput(area);
};
let calculateAreaRound = () => {
  width = document.getElementById('roundWidth').value;
  let area = Math.round(Math.PI * (width / 2) * (width / 2) * 1000) / 1000;
  areaOutput(area);
};

measure.addEventListener('change', () => {
  // calculateArea();
  if (roomShape.value == 'rectangular') {
    calculateAreaRectangular();
  } else if (roomShape.value == 'round') {
    calculateAreaRound();
  }
});

document.querySelectorAll('.input__roomArea').forEach((item) => {
  item.addEventListener('keyup', () => {
    if (roomShape.value == 'rectangular') {
      calculateAreaRectangular();
    } else if (roomShape.value == 'round') {
      calculateAreaRound();
    }
  });
});

roomShape.addEventListener('change', (e) => {
  let blockRound = document.getElementById('blockRound');
  let blockRectangular = document.getElementById('blockRectangular');
  function toggleInvisible(element, isInvisible = false) {
    if (isInvisible == true) {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  }

  if (e.target.value == 'rectangular') {
    toggleInvisible(blockRectangular, false);
    toggleInvisible(blockRound, true);
    calculateAreaRectangular();
  } else if (e.target.value == 'round') {
    toggleInvisible(blockRound, false);
    toggleInvisible(blockRectangular, true);
    calculateAreaRound();
  }
});
