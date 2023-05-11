// ********ESERCIZIO 1********

const listVegetables = [
  {
    id: 1,
    title: "funciddi",
  },
  {
    id: 2,
    title: "asparaci",
  },
  {
    id: 3,
    title: "finucchieddu",
  },
  {
    id: 4,
    title: "zalichi",
  },
  {
    id: 5,
    title: "cipuddetta",
  },
];
const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);
const divEl = cE("div");
const unList = cE("ul");

document.body.appendChild(divEl);
divEl.appendChild(unList);

for (let fuck of listVegetables) {
  const listItem = cE("li");
  unList.appendChild(listItem);
  listItem.textContent = fuck.title;
}

// *********ESERCIZIO AVANZATO********
