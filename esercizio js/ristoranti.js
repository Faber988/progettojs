const ListaRistoranti = {
  ristorante: [
    {
      Locale: "La Braciera",
      img : "labraciera.png",
      Indirizzo: "Via Resuttana 350, Palermo",
      Telefono: "091526373",
      tipologia: "Pizzeria",
      "Prezzo-Medio": 20,
      "Gluten-free": true,
      Orari: [
        "Lunedì : chiuso",
        "Martedì : 18-24",
        "Mercoledì : 18-24",
        "Giovedì : 18-24",
        "Venerdì : 18-24",
        "Sabato  :  12-24",
        "Domenica : 12-24",
      ],
    },

    {
      Locale: "Porta Carbone",
      img : "carbone.jpg",
      Indirizzo: "Via Cale 250, Palermo",
      Telefono: "091537373",
      tipologia: "Street-food",
      "Prezzo-Medio": 10,
      "Gluten-free": false,
      Orari: [
        "Lunedì : chiuso",
        "Martedì : 8-24",
        "Mercoledì : 8-24",
        "Giovedì : 8-24",
        "Venerdì : 8-24",
        "Sabato  :  8-24",
        "Domenica : 12-24",
      ],
    },

    {
      Locale: "ISHI Sushi",
      img : "sushi.png",
      Indirizzo: "Via Libertà 150, Palermo",
      Telefono: "0916273783",
      tipologia: "Sushi",
      "Prezzo-Medio": 50,
      "Gluten-free": true,
      Orari: [
        "Lunedì : chiuso",
        "Martedì : 19-24",
        "Mercoledì : 19-24",
        "Giovedì : 19-24",
        "Venerdì : 19-24",
        "Sabato  :  19-24",
        "Domenica : 12-24",
      ],
    },
  ],
};

function populateDiv(obj) {
  const section = document.querySelector("div");
  const ristoranti = obj.ristorante;

  for (const i of ristoranti) {
    const article = document.createElement("article");

    let myH1 = document.createElement("h1");
    let myh3 = document.createElement("h3");
    let img = document.createElement("img");
    myH1.textContent = `Ristorante : ${i.Locale}`;
    myh3.textContent = `Tipologia cucina : ${i.tipologia}`;
    img.setAttribute("src", i.img)
    img.setAttribute("width", "90%")
    img.setAttribute("padding", "10px")
    img.setAttribute("margin", "auto")

    console.log(myH1);
    article.appendChild(myH1);
    article.appendChild(myh3)
    article.appendChild(img);
    section.appendChild(article);
    
  }

 
}

populateDiv(ListaRistoranti);
