//ESERCIZIO 2

// function es2() {
//   console.log("Esercizio 2");

//   let num1 = parseInt(prompt("inserisci il primo numero"));
//   let calculator = prompt("inserisci operatore");
//   let num2 = parseInt(prompt("inserisci il secondo numero"));
//   let result;

//   switch (calculator) {
//     case "-":
//       result = num1 + num2;
//       console.log("il risultato è" + result);
//       break;

//     case "+":
//       result = num1 - num2;
//       console.log("il risultato è" + result);
//       break;

//     case "/":
//       result = num1 * num2;
//       console.log("il risultato è" + result);
//       break;

//     case "*":
//       result = num1 / num2;
//       console.log("il risultato è" + result);
//       break;
//   }
// }
// es2();

// // *****ESERCIZIO 3******
// function myInfo() {
//   const myInfo = {
//     name: "Marina",
//     surname: "Valenza",
//     age: 30,
//     object: "caffe",
//   };
//   console.log(`il tuo nome è ${myInfo["name"]}`);
//   console.log(`il tuo cognome è ${myInfo["surname"]}`);
//   console.log(`la tua età è ${myInfo["age"]}`);
//   console.log(`utilizza un oggetto per descriverti ${myInfo["object"]}`);
// }

// myInfo();

//************ESERCIZIO AVANZATO *********
function userCalculator(num1, num2, operator) {
  function addition() {
    return num1 + num2;
  }
  function subtraction() {
    return num1 - num2;
  }
  function multiplication() {
    return num1 * num2;
  }
  function divided() {
    return num1 / num2;
  }

  if (operator === "+") {
    console.log(addition());
  } else if (operator === "-") {
    console.log(subtraction());
  } else if (operator === "*") {
    console.log(multiplication());
  } else if (operator === "/") {
    console.log(divided());
  } else {
    console.log("That's not an operator!!");
  }
}
const num1 = parseInt(prompt("insert number"));
const calculator = prompt("insert operator");
const num2 = parseInt(prompt("insert number"));
userCalculator(num1, num2, calculator);
