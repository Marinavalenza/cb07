import { cartItems } from "../script.js";
export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export const qSA = (els) => document.querySelectorAll(els);
const rootEl = qS("#root");
import { usersList } from "./credentials.js";
// sezione primo prodotto
export const createCard = (data) => {
  const wrapperEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const ratingEl = cE("p");
  const priceEl = cE("h4");
  const buttonEl = cE("button");

  wrapperEl.className = "productCard";
  wrapperEl.setAttribute("id", data.id);
  imageEl.src = data.thumbnail;
  imageEl.alt = data.title;
  titleEl.textContent = data.title;
  descriptionEl.textContent = data.description;
  ratingEl.textContent = data.rating;
  priceEl.textContent = data.price + " $";
  buttonEl.textContent = "Add to cart!";

  wrapperEl.append(
    imageEl,
    titleEl,
    descriptionEl,
    ratingEl,
    priceEl,
    buttonEl
  );

  return wrapperEl;
};
//modale
export const createProductModal = (productData, parent = null) => {
  const wrapperEl = cE("div");
  const overlayEl = cE("div");
  const galleryEl = cE("div");
  const mainImgEl = cE("img");

  const textEl = cE("div");
  const mainTextEl = cE("div");
  const mainTextTitleEl = cE("h1");
  const mainTextDescEl = cE("p");
  const mainTextRateEl = cE("p");
  const buyTextEl = cE("div");
  const buyTextFirstBtnEl = cE("button");
  const buyTextSecondBtnEl = cE("button");

  wrapperEl.className = "modalProduct";
  overlayEl.className = "modalOverlay";
  galleryEl.className = "modalProduct__gallery";
  mainImgEl.src = productData.thumbnail;
  mainImgEl.alt = productData.title;

  textEl.className = "modalProduct__text";
  mainTextEl.className = "modalMainText";
  mainTextTitleEl.textContent = productData.title;
  mainTextDescEl.textContent = productData.description;
  mainTextRateEl.textContent = productData.rating;

  buyTextEl.className = "modalMainBuy";
  buyTextFirstBtnEl.textContent = "Buy Now!";
  buyTextSecondBtnEl.textContent = "Come Back Bitch";

  mainTextEl.append(mainTextTitleEl, mainTextDescEl, mainTextRateEl);
  buyTextEl.append(buyTextFirstBtnEl, buyTextSecondBtnEl);
  galleryEl.append(mainImgEl);
  textEl.append(mainTextEl, buyTextEl);
  wrapperEl.append(overlayEl, galleryEl, textEl);

  buyTextSecondBtnEl.addEventListener("click", () => {
    rootEl.removeChild(wrapperEl);
  });

  buyTextFirstBtnEl.addEventListener("click", () => {
    alert("Great add!!");
    cartItems.push(productData);
    parent.removeChild(wrapperEl);
  });

  return wrapperEl;
};

//CARt
export const cartAll = (data) => {
  const mainCartItemEl = cE("div");
  const mainCartTextWrapperEl = cE("div");
  const mainTextItemEl = cE("h3");
  const mainPriceItemEl = cE("h4");
  const mainCartItemImg = cE("img");
  const deleteCartImeEl = cE("button");

  mainCartItemEl.className = "mainCartItem";
  mainCartTextWrapperEl.className = "mainCartTextWrapperEl";
  mainTextItemEl.textContent = data.title;
  mainPriceItemEl.textContent = data.price + "$";
  mainCartItemImg.className = "itemCartImg";
  mainCartItemImg.src = data.thumbnail;
  deleteCartImeEl.textContent = "";

  mainCartTextWrapperEl.append(mainTextItemEl);
  mainCartItemEl.append(
    mainCartItemImg,
    mainCartTextWrapperEl,
    mainTextItemEl,
    mainPriceItemEl,
    deleteCartImeEl
  );
};

// export const createCartModal = (cartItems) => {
//   const wrapperEl = cE("div");
//   const overEl = cE("div");
// };
// const cart = qS(".addToCart");
// cart.addEventListener("click", () => {
//   rootEl.append(cartModal(cartItems, rootEl));
// });

//LOG IN PAGE
export const signInModal = (event) => {
  const wrapperEl = cE("div");
  const submitEl = cE("input");
  const userEl = cE("input");
  const passwordEl = cE("input");

  wrapperEl.className = "container";
  userEl.type = "text";
  userEl.placeholder = "username";
  passwordEl.type = "password";
  passwordEl.placeholder = "password";
  submitEl.type = "submit";

  wrapperEl.addEventListener("submit", (event) => {
    //console.log(event);
    event.preventDefault();

    const AuthTrue = !!usersList.find(
      (giuseppina) =>
        userEl.username === event.srcElement[0].value &&
        passwordEl.password === event.srcElement[1].value
    );

    // if (isAuth) {
    //   rootEl.append(productListTitle, productList);
    //   rootEl.removeChild(wrapperEl);
    // } else {
    //   alert("Username e/o password non corretta");
    // }
  });
  wrapperEl.append(userEl, passwordEl, submitEl);

  return wrapperEl;
};
