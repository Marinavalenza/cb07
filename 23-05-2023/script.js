import { createEl, logInPage, bodyEl } from "./utils/fn.js";

//import { credentials } from "./utils/credentials.js";
//console.log(credentials);
//
//console.log(bodyEl);
const wrapperEl = createEl("div", "", { name: "class", value: "cartItems" });
bodyEl.append(logInPage());
bodyEl.appendChild(wrapperEl);

//HTTP METHODS (serve a gestire la richiesta, la risposta riguarda il back end)
//--GET (operazione di lettura, navigare su grandi liste, status 200(ok))
//--POST (crea nel server, si possono definire nuove risorse, status 201:(ok) ci sono degli header indispensabili es: content type. I dati vanno della chiamata body)
//--PUT(caricare, ripristino di una risorsa)
//-- PATCH(aggiorna e modifica, la differenza con PUT è modificare UNA SOLA VOLTA la risorsa)
//--DELETE(prende la risorsa e la elimina)

//-- json stringfy: (serve nel metodo POST)converte in stringa l'oggetto e viceversa, si fa perchè il server può non capire il formato js. Quando si importa su server bisogns creare le stringhe, noi dobbiamo leggere in oggetto
