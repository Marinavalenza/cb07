export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export const qSA = (els) => document.querySelectorAll(els);
const rootEl = qS("#root");
// sezione primo prodotto
export const createProduct = (data) => {
  const wrapperEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const ratingEl = cE("p");
  const priceEl = cE("h4");
  const buttonEl = cE("button");

  wrapperEl.className = "productCard";
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

  return wrapperEl;
};
