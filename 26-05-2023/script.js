//CREO ARRAY DI OGGETTI
const allToDo = [
  {
    id: 1,
    todo: "Take care of you",
    completed: true,
  },
  {
    id: 2,
    todo: "Yoga Class",
    completed: true,
  },
  {
    id: 3,
    todo: "Plan your day",
    completed: false,
  },
  {
    id: 4,
    todo: "Love your job",
    completed: false,
  },
];
// localStorage.setItem("allToDo", "listItem");
// localStorage.getItem;
//CREO E ASSEGNO GLI ELEMENTI DELLA LISTA
const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
const qSA = (elements) => document.querySelectorAll(elements);

//DATA
const listItem = (todoData) => {
  const listItemEl = cE("li");
  const removeButtonEl = cE("button");
  const removeButtonEls = qSA(".removeButton");
  //localStorage.setItem("Marina", "Michela");
  //console.log(localStorage);

  listItemEl.id = todoData.id;
  listItemEl.textContent = todoData.todo;
  listItemEl.className = listItem;
  removeButtonEl.className = "removeButton";
  removeButtonEl.textContent = "X";

  if (todoData.completed) listItemEl.classList.add("listCompleted");
  listItemEl.appendChild(removeButtonEl);
  removeButtonEls.forEach((pippo) =>
    pippo.addEventListener("click", () => {
      allToDo = allToDo.filter((item) => item.id !== pippo.parentNode.id);
    })
  );
  return listItemEl;
};
const listCheck = () => {
  const listitemEls = qSA(".listItem");
  //CLICK SU ELEMENTI DI ALL TO DO
  listitemEls.forEach((element) =>
    element.addEventListener("click", (evt) => {
      allToDo.forEach((item) => {
        if (item.id === parseInt(evt.target.id)) {
          item.completed = !item.completed;
          element.classList.toggle("listCompleted");
        }
      });
    })
  );
};

//CREO LE INPUT
const todoInputEl = cE("input");
const todoButtonEl = cE("button");
const listEl = cE("ul");

todoInputEl.setAttribute("type", "text");
todoInputEl.setAttribute("placeholder", "todo text");
todoInputEl.className = "todoInput";
todoButtonEl.className = "todoButton";
todoButtonEl.textContent = "Add your task";

listEl.className = "list";

//appendo
allToDo.forEach((item) => listEl.append(listItem(item)));

document.body.append(todoInputEl, todoButtonEl, listEl);
listCheck();

let inputValueText;
//click degli input
todoInputEl.addEventListener("change", (event) => {
  inputValueText = event.target.value;
  //console.log(todoInputEl);
});
todoButtonEl.addEventListener("click", () => {
  allToDo.push({
    id: Math.floor(Math.random() * 100),
    todo: inputValueText,
    completed: false,
  });
  listEl.textContent = "";
  allToDo.forEach((item) => listEl.append(listItem(item)));
});
