const enterPositiveNumbersOnly = (className) => {
  document.querySelectorAll(className).forEach((item) => {
    item.addEventListener('keydown', (e) => {
      if (
        !(e.key >= 0 || e.key <= 9) &&
        e.key != '.' &&
        e.key != 'Backspace' &&
        e.key != 'Delete' &&
        e.key != 'ArrowLeft' &&
        e.key != 'ArrowRight'
      ) {
        e.preventDefault();
      } else if (
        e.target.value.includes('.') &&
        !(e.key >= 0 || e.key <= 9) &&
        e.key != 'Backspace' &&
        e.key != 'Delete' &&
        e.key != 'ArrowLeft' &&
        e.key != 'ArrowRight'
      ) {
        e.preventDefault();
      }
    });
  });
};
export default enterPositiveNumbersOnly;

export const enterIntPositiveNumbersOnly = (className) => {
  document.querySelectorAll(className).forEach((item) => {
    item.addEventListener('keydown', (e) => {
      if (
        !(e.key >= 0 || e.key <= 9) &&
        e.key != 'Backspace' &&
        e.key != 'Delete' &&
        e.key != 'ArrowLeft' &&
        e.key != 'ArrowRight'
      ) {
        e.preventDefault();
      }
    });
  });
};

export const enterNumbersOnly = (className) => {
  document.querySelectorAll(className).forEach((item) => {
    item.addEventListener('keydown', (e) => {
      if (
        !(e.key >= 0 || e.key <= 9) &&
        e.key != '.' &&
        e.key != 'Backspace' &&
        e.key != 'Delete' &&
        e.key != '-' &&
        e.key != 'ArrowLeft' &&
        e.key != 'ArrowRight'
      ) {
        e.preventDefault();
      } else if (
        e.target.value.includes('.') &&
        !(e.key >= 0 || e.key <= 9) &&
        e.key != 'Backspace' &&
        e.key != 'Delete' &&
        e.key != 'ArrowLeft' &&
        e.key != 'ArrowRight'
      ) {
        e.preventDefault();
      }
    });
  });
};
