//Esercizio 1 Scrivere un piccolo script
//javascript che inverta un array senza
//utilizzare il metodo reverse

function es1() {
  let array = ["Maria", "Lucia", "Benedetta", "Sandra", "Concetta"];
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    console.log(num);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    let num = array[i];
    newArray.push(num);
    console.log(newArray);
  }
}

//Esercizio 2 Dato un array di numeri,
//stampare il velore minimo e massimo

function es2() {
  let numbers = ["57", "46", "85", "30", "31"];
  numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(numbers);

  numbers.sort(function (a, b) {
    return b - a;
  });
  console.log(numbers);
}

es1();
es2();
