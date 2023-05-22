// FETCH ADVANCED --  (API = sono delle interfacce, il ponte di connessione tra due risorse , in questo caso la fetch è un api che permette di connettere js ad un server. nella maggior parte dei casi richiedono le api key)
//(REST API: sono servizi che danno informazioni da utilizzare, possono arrivare da più fonti)
//fetch

// //FUNZIONI ASYNC -- ()
export const getWeatherData = async (city) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=86175c1b26ae4b45a9e123032232205&q=${city})&aqi=no`
  );
  const data = await res.json();
  console.log(data);
  return data;
};

export const cityWeather = (data) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h1");
  const pEl = document.createElement("h2");

  titleEl.textContent = data.location.name;
  pEl.textContent = data.current.temp_c;
  imgEl.setAttribute("src", data.current.condition.icon);
  wrapperEl.append(titleEl, imgEl, pEl);
  return wrapperEl;
};
