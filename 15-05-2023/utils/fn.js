export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);

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
