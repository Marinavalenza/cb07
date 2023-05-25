import { GET } from "/utils/http.js";
/********* GET******* */
export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);
export const rootEl = qS(".root");

GET().then((data) => {
  data.todos.forEach((todo) => listItem(todo));
});
export const listItem = (data) => {
  const elementList = cE("li");
  elementList.textContent = data.todo;
  elementList.className = "todo";

  rootEl.append(elementList);
};
//*******POST******* */
