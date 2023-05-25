//**************GET *************/
const BASE_URL = "https://dummyjson.com/todos/";

export const GET = async () => {
  const res = await fetch(BASE_URL);
  try {
    if (res.ok) {
      return res.json();
    }
    throw new Error("ma che vuoi");
  } catch (err) {
    return {
      todos: [
        {
          todo: "lista non presente",
        },
      ],
    };
  }
  const data = await res.json();
  return data;
};
export const POST = async (platessa) => {
  const res = await fetch(BASE_URL + "add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: platessa,
      completed: false,
      userId: 5,
    }),
  });
  const data = await res.json();
  return data;
};
// export const DELETE = async (endpoint) => {
//   const res = await fetch(BASE_URL + endpoint, {
//     method: "DELETE",
//   });
//   const data = await res.json();

//   return data;
// };
