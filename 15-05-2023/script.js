import { cE, qS, createProduct } from "./utils/fn.js";

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

productList.className = "productList";
productListTitle.textContent = "Choose yours!";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.forEach((product) =>
      productList.append(createProduct(product))
    )
  );
rootEl.append(productListTitle, productList);
