//Retirement Calculator
let formRetirement = document.getElementById('formRetirement');
let calculateRetirement = document.getElementById('btn__retirement');
let retirementStatement = document.getElementById('retirementStatement');

let currentYear = new Date().getFullYear();
calculateRetirement.addEventListener('click', (e) => {
  e.preventDefault();
  let age = Number(formRetirement.elements.inputCurrentAge.value);
  let retirement = Number(formRetirement.elements.inputAgeRetirement.value);
  let yearsLeft = retirement - age;

  if (age && retirement) {
    if (age > 0 && retirement > 0 && age < retirement) {
      retirementStatement.setAttribute('style', 'white-space: pre;');
      retirementStatement.textContent = `You have ${yearsLeft} years left until you can retire.\r\nIt's ${currentYear}, so you can retire in ${
        currentYear + yearsLeft
      }.`;
    } else {
      retirementStatement.textContent = 'You can retire now.';
    }
  }
  formRetirement.elements.inputCurrentAge.value = '';
  formRetirement.elements.inputAgeRetirement.value = '';
});

//Simple Math
let submitNumbers = document.getElementById('btn__simpleMath');
let simpleMathCalculations = document.getElementById('simpleMathCalculations');
let formSimpleMath = document.getElementById('formSimpleMath');

submitNumbers.addEventListener('click', (e) => {
  e.preventDefault();
  let numOne = Number(formSimpleMath.elements.inputNumberOne.value);
  let numTwo = Number(formSimpleMath.elements.inputNumberTwo.value);
  if (numOne && numTwo) {
    simpleMathCalculations.setAttribute('style', 'white-space: pre;');
    simpleMathCalculations.textContent = `${numOne} + ${numTwo} = ${numOne + numTwo}\r\n
${numOne} - ${numTwo} = ${numOne - numTwo}\r\n
${numOne} * ${numTwo} = ${numOne * numTwo}\r\n
${numOne} / ${numTwo} = ${numOne / numTwo}`;
  }
  formSimpleMath.elements.inputNumberOne.value = '';
  formSimpleMath.elements.inputNumberTwo.value = '';
});
//Mad Lib
let playMadLib = document.getElementById('btn__madLib');
let sentence = document.getElementById('madLib');
playMadLib.addEventListener('click', (e) => {
  let noun = prompt('Enter a noun:');
  let verb = prompt('Enter a verb:');
  let adjective = prompt('Enter an adjective:');
  let adverb = prompt('Enter an adverb:');
  sentence.textContent = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
});
//Printing Quotes
let getQuote = document.getElementById('btn__getQuote');

getQuote.addEventListener('click', (e) => {
  let quote = prompt('What is the quote?');
  let author = prompt('Who said it?');
  let li = document.createElement('LI');
  li.classList.add('li__quotes');
  document.getElementById('list__quotes').appendChild(li);
  if (quote && author) {
    li.textContent = author + ' says, "' + quote + '"';
  } else if (quote) {
    li.textContent = 'Unknown says, "' + quote + '"';
  }
});

//Counting the Number of Characters
let findCharLength = document.getElementById('btn__charLength');
findCharLength.addEventListener('click', (e) => {
  let string = prompt('What is the input string?');
  if (string) {
    let li = document.createElement('LI');
    li.textContent = `'${string}' has ${string.length} characters.`;
    li.classList.add('li__strings');
    document.getElementById('list__strings').appendChild(li);
  } else {
    alert('Please, enter a string');
  }
});

let inputCharCount = document.getElementById('inputCharCount');
let charCounter = document.getElementById('charCounter');

inputCharCount.addEventListener('keyup', (e) => {
  charCounter.textContent = `Number of characters: ${e.target.value.length}`; //target.value.length
});

//Saying Hello
let tellYourName = document.getElementById('btn__tellmyname');

tellYourName.addEventListener('click', (e) => {
  let name = prompt('What is your name?');
  if (name) {
    let li = document.createElement('LI');
    li.textContent = `Hello, ${name}, nice to meet you!`;
    li.classList.add('li__names');
    document.getElementById('list__names').appendChild(li);
  }
});
