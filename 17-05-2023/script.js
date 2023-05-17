import { cE, qS, createCard, createProductModal, qSA } from "./utils/fn.js";

// const productMock = {
//   id: 30,
//   title: "Key Holder",
//   description:
//     "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
//   price: 30,
//   discountPercentage: 2.92,
//   rating: 4.92,
//   stock: 54,
//   brand: "Golden",
//   category: "home-decoration",
//   thumbnail: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
//   images: [
//     "https://i.dummyjson.com/data/products/30/1.jpg",
//     "https://i.dummyjson.com/data/products/30/2.jpg",
//     "https://i.dummyjson.com/data/products/30/3.jpg",
//     "https://i.dummyjson.com/data/products/27/thumbnail.webp",
//   ],
// };
const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");
const searchProductEl = qS(".searchInput");
const categoryEl = qS(".categories");

let productListData = [];
productList.className = "productList";
productListTitle.textContent = "Choose Yours!";
rootEl.append(productListTitle, productList);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productListData = data.products;
    productListData.forEach((product) =>
      productList.append(createCard(product))
    );
  })
  .then(() => {
    const productCardEls = qSA(".productCard");

    productCardEls.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => rootEl.append(createProductModal(data, rootEl)))
      )
    );
  });
//eventi

searchProductEl.addEventListener("input", (evt) => {
  //se searchproductEl ha valore===niente

  if (evt.target.value === "") {
    //viene creata una carta per ogmi oggetto con ForEach

    productListData.forEach((obj) => rootEl.append(createCard(obj)));
    //se la condizione === false
  } else {
    // console.log(productListData);
    rootEl.textContent = "";
    const filteredProducts = productListData.filter((product) =>
      product.title.toLowerCase().includes(evt.target.value.toLowerCase())
    );
    filteredProducts.forEach((obj) => rootEl.append(createCard(obj)));
    // .forEach((obj) => rootEl.append(createProduct(obj)));
  }
});

//choise categorie
categoryEl.addEventListener("change", (evt) => {
  //console.log(evt.target.value);
  if (evt.target.value === "") {
    productListData.forEach((obj) => rootEl.append(createCard(obj)));
  } else {
    rootEl.textContent = "";
    productListData.filter(
      (product) =>
        product.categories.toLowerCase() === evt.target.value.toLowerCase()
    );
  }
});
