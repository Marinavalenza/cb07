const imageList = [
  "https://cdn.pixabay.com/photo/2017/04/28/01/06/disney-2267118_960_720.png",
  "https://cdn.pixabay.com/photo/2017/04/28/01/10/frozen-2267127_640.png",
  "https://cdn.pixabay.com/photo/2017/04/28/01/06/disney-2267119_960_720.png",
  "https://cdn.pixabay.com/photo/2017/04/28/01/06/tiana-2267120_960_720.png",
];

let imageIndex = 0;

const rootEl = document.querySelector("#root");

const imgEl = document.createElement("img");
const buttonNextEl = document.createElement("button");
const buttonPrevEl = document.createElement("button");

imgEl.src = imageList[imageIndex];
imgEl.alt = "random image";
imgEl.className = "imageSlider";
buttonNextEl.textContent = "Next";
buttonPrevEl.textContent = "Back";

rootEl.append(buttonPrevEl, imgEl, buttonNextEl);

setInterval(() => {
  imgEl.src = imageList[imageIndex];
  imageIndex++;

  if (imageIndex === imageList.length) imageIndex = 0;
}, 5000);

buttonNextEl.addEventListener("click", () => {
  if (imageIndex > imageList.length - 2) imageIndex = 0;

  imageIndex++;
  imgEl.src = imageList[imageIndex];
});

buttonPrevEl.addEventListener("click", () => {
  if (imageIndex <= 0) imageIndex = imageList.length - 1;

  imageIndex--;
  imgEl.src = imageList[imageIndex];
});
