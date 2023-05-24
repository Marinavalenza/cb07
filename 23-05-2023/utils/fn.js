import { credentials } from "./credentials.js";
import { GET } from "./http.js";
export const bodyEl = document.querySelector("body");
export const createEl = (type, content, ...attr) => {
  const element = document.createElement(type);
  element.textContent = content;
  attr.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
  return element;
};
export const productCard = (productData) => {
  const wrapperEl = createEl("div", "", {
    name: "class",
    value: "cartList",
  });
  console.log(wrapperEl);
  const titleEl = createEl("h5", productData.title, {
    name: "class",
    value: "titleEl",
  });

  const priceEl = createEl("p", productData.price, {
    name: "class",
    value: "cartList__title",
  });
  const quantityEl = createEl("p", productData.quantity, {
    name: "class",
    value: "cartList__quantity",
  });
  wrapperEl.append(titleEl, priceEl, quantityEl);

  return wrapperEl;
};
export const logInPage = () => {
  const logIn = createEl("form", "", { name: "class", value: "login" });
  const username = createEl("input", "", { name: "type", value: "text" });
  const password = createEl("input", "", { name: "type", value: "password" });
  const submit = createEl("input", "", { name: "type", value: "submit" });
  logIn.append(username, password, submit);

  logIn.addEventListener("submit", (event) => {
    //console.log(event);
    event.preventDefault();

    const isAuth = credentials.find(
      (user) =>
        user.name === event.srcElement[0].value &&
        user.password === event.srcElement[1].value
    );
    if (isAuth) {
      alert("bravo fra!");
      console.log(isAuth.id);
      GET(isAuth.id).then((data) =>
        data.products.forEach((product) => {
          bodyEl.append(productCard(product));
        })
      );
    } else {
      alert("oh no!");
    }
  });
  return logIn;
};
//vaffanbagno
