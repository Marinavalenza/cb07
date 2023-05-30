import { postGen } from "../script/fn.js";
import { GET } from "../script/http.js";
let userList = [];
let userPost = [];

const navItems = document.querySelectorAll(".navItem");
const contentEl = document.querySelector(".content");
const remoteData = Promise.all([GET("/posts"), GET("/users")]);
//voglio morire
remoteData
  .then((data) => {
    userPost = data[0].posts;
    userList = data[1].users;
  })
  .then(() =>
    userPost
      .map((post) => {
        post.user = userList.find((user) => user.id === post.userId);
        return post;
      })
      .forEach((post) => contentEl.append(postGen(post)))
  );
navItems.forEach((element) => {
  element.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  });
});
