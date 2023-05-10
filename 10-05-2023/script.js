// ******ESERCIZIO 2******

const qs = (element) => document.querySelector(element);

const form = qs("form");
const firstNum = qs(".firstNum");
const operator = qs(".operator");
const secondNum = qs(".secondNum");
const submit = qs(".risultato");
const numero = qs(".numero");

const calculatorAll = (operator) => operator;
const calculatorSum = (firstNum, secondNum) => firstNum + secondNum;
const calculatorSub = (firstNum, secondNum) => firstNum - secondNum;
const calculatorMult = (firstNum, secondNum) => firstNum * secondNum;
const calculatorDiv = (firstNum, secondNum) => firstNum / secondNum;

const calculator = (callback, firstNum, secondNum) => {
  return callback(firstNum, secondNum);
};
form.addEventListener("submit", (event) => {
  event.preventDefault();

  switch (operator.value) {
    case "+":
      numero.textContent = calculator(
        calculatorSum,
        parseInt(firstNum.value),
        parseInt(secondNum.value)
      );
      break;
    case "-":
      numero.textContent = calculator(
        calculatorSub,
        parseInt(firstNum.value),
        parseInt(secondNum.value)
      );
      break;
    case "*":
      numero.textContent = calculator(
        calculatorMult,
        parseInt(firstNum.value),
        parseInt(secondNum.value)
      );
      break;
    case "/":
      numero.textContent = calculator(
        calculatorDiv,
        parseInt(firstNum.value),
        parseInt(secondNum.value)
      );
      break;
  }
});
