// *******ESERCIZIO 1*******

const button = document.querySelector(".buttonExercise1");
const output = document.querySelector(".output");
button.addEventListener("click", () => {
  const userInput = prompt("Inserire testo");
  output.textContent = userInput;
});

// ******ESERCIZIO 2******

const formElement = document.querySelector(".exercise2");
const textInput = document.querySelector(".input");
const textReturn = document.querySelector(".text-output");
function handleSubmit(event) {
  event.preventDefault();
  textReturn.textContent = textInput.value;
  textInput.value = "";
}
formElement.addEventListener("submit", handleSubmit);

// ESERCIZIO 3
let inputText3 = document.querySelector(".inputText3");
let buttonExercise3 = document.querySelector(".buttonExercise3");
let ulEl = document.querySelector("ul");

function addEl() {
  if (inputText3.value === "") {
    return;
  }
  let newLi = document.createElement("li");
  newLi.textContent = inputText3.value;
  ulEl.appendChild(newLi);
  inputText3.value = "";
}
buttonExercise3.addEventListener("click", addEl);
