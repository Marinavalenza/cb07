// ESERCIZIO 1:
//ARRAY IN PIU' FUNZIONI
let person = ["Marina", "Valenza", "30", "Italia"];

// const name= person[0]
// const surname= person[1]
// const age= person[2]
// const country= person[3];

//DECOSTRUCTURING ARRAY

const [name, surname, age, country] = person;
console.log(name, surname, age, country);

//AVANZATO 1: riprendendo l'esercizio 2 se nell'oggetto libro non fosse specificata l'edizione, se specificata prenderà ovviamente quello dell'oggetto conenuto in infoBook
// const { title, author, year, edition } = infoBook;

//ESERCIZIO 2:
// OGGETTI IN PIU' FUNZIONI
const infoBook = {
  title: "La misura del tempo",
  author: "Gianrico Carofiglio",
  year: "2022",
  edition: "Einaudi",
  //edition:"non specificato",
};

// const titleInfo = infoBook.title
// const authorInfo = infoBook.author
// const yearInfo = infoBook.year

const { title, author, year, edition = "non specificato" } = infoBook;
console.log(title, author, year, edition);
