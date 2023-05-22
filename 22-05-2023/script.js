import { getWeatherData, cityWeather } from "./utils/utils.js";

const root = document.querySelector("#root");
//const btnEl = document.querySelector(".temperature");
const inputText = document.querySelector("text");
const inputSubmit = document.querySelector("submit");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherData(e.srcElement[0].value).then((data) => {
    console.log(data);
    root.append(cityWeather(data));
  });
});
//const loadBtn = document.queryselector("button");

// FETCH ADVANCED --  (API = sono delle interfacce, il ponte di connessione tra due risorse , in questo caso la fetch è un api che permette di connettere js ad un server. nella maggior parte dei casi richiedono le api key)
//(REST API: sono servizi che danno informazioni da utilizzare, possono arrivare da più fonti)
//fetch

// //FUNZIONI ASYNC -- ()
// const getWeatherData= async(lat,lon) =>{
//   const res= await fetch {
//   "xxxxxxxx"
// }
//headers:{
//   "xxxxxxxxxxxx"  (oggetti contenuti in json)
// }
// // // } ecc...
// const data = await res.json();
// return data;
// };
//getWatherData(........) .then ((data)=> console.log(data));
//
//getWatherData(........) .then ((data)=> console.log(data));

//loadbtn.addEventListener ("click, () =>{
//   alert("btn premuto");
//   getWeatherData ("xxxxxxxxxx").then((content=>(weatherData= content.data)));
// };
