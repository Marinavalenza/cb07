import { cE, rootEl } from "./utils/fn.js";
import { POST } from "./utils/http.js";

const wrapperInput = cE("form");
const textInput = cE("input");
const buttonInput = cE("input");
textInput.className = "textInput";
textInput.setAttribute("type", "text");
textInput.setAttribute("placeholder", "Add a task");
buttonInput.className = "buttonInput";
buttonInput.setAttribute("type", "submit");
buttonInput.setAttribute("value", "Add");

wrapperInput.className = "wrapperInput";

wrapperInput.append(textInput, buttonInput);
rootEl.append(wrapperInput);

wrapperInput.addEventListener("submit", (e) => {
  e.preventDefault();
  POST(textInput.value);
  console.log(textInput.value);
  //console.log("ciao");

  // POST()
  //   .then((res) => res.json())
  //   .then.push(input.value);
});
