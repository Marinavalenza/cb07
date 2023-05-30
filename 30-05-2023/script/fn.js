export const cE = (type) => document.createElement(type);

export const postGen = (postData) => {
  const wrapperEl = cE("div");
  const userImageEl = cE("img");
  const contentEl = cE("div");
  const nameEl = cE("span");
  const userNameEl = cE("span");
  const textContentEl = cE("p");
  const reactionsEl = cE("p");
  const imagePlaceHolder = "https://robohash.org/michela";

  wrapperEl.className = "post";
  userImageEl.src = postData.user?.image || imagePlaceHolder; //potrebbe non funzionare
  userImageEl.alt = postData.user?.username;
  contentEl.className = "post__content";
  nameEl.textContent = postData.user?.firstName;
  userNameEl.textContent = postData.user?.username;
  textContentEl.textContent = postData.body;
  reactionsEl.textContent = postData.reactions;

  contentEl.append(nameEl, userNameEl, textContentEl, reactionsEl);
  wrapperEl.append(userImageEl, contentEl);

  return wrapperEl;
};
