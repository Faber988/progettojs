const prodotti = [
  {
    titolo: "Scarpe Nike",
    descrizione:
      "descrizione prodotto descrizione prodtto prodotto nuovo sconti",
    prezzo: 150,
    img: "./img/immagine1.jpg",
  },
  {
    titolo: "Scarpe adidas",
    descrizione:
      "descrizione prodotto descrizione prodtto prodotto nuovo sconti",
    prezzo: 140,
    img: "img/immagine1.jpg",
  },
  {
    titolo: "Scarpe puma",
    descrizione:
      "descrizione prodotto descrizione prodtto prodotto nuovo sconti",
    prezzo: 190,
    img: "img/immagine1.jpg",
  },
  {
    titolo: "Scarpe Nike",
    descrizione:
      "descrizione prodotto descrizione prodtto prodotto nuovo sconti",
    prezzo: 130,
    img: "img/immagine1.jpg",
  },
  {
    titolo: "Scarpe Nike",
    descrizione:
      "descrizione prodotto descrizione prodtto prodotto nuovo sconti",
    prezzo: 180,
    img: "img/immagine1.jpg",
  },
  {
    titolo: "Scarpe Nike",
    descrizione:
      "descrizione prodotto descrizione prodtto prodotto nuovo sconti",
    prezzo: 140,
    img: "img/immagine1.jpg",
  },
  {
    titolo: "Scarpe Nike",
    descrizione:
      "descrizione prodotto descrizione prodtto prodotto nuovo sconti",
    prezzo: 150,
    img: "img/immagine1.jpg",
  },
  {
    titolo: "Scarpe Nike",
    descrizione:
      "descrizione prodotto descrizione prodtto prodotto nuovo sconti",
    prezzo: 150,
    img: "img/immagine1.jpg",
  },
];

let griglia_prodotti = document.getElementById("prodottijs");
let items = document.getElementsByClassName("prodotto");

prodotti.forEach((element) => {
  let div = document.createElement("div");
  div.classList.add("prodotto");
  let image = document.createElement("img");
  image.src = element.img;

  let titolo = document.createTextNode(element.titolo);


  griglia_prodotti.appendChild(div);

  let p = document.createElement("p");

  let prezzo = document.createTextNode(element.prezzo);
  div.appendChild(image);
  div.appendChild(titolo);
  p.appendChild(prezzo);

  div.appendChild(p);
});
