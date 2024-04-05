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
    let ul = document.createElement("ul")
    let myP = document.createElement("p")
    let myP2 = document.createElement("p")
    myH1.textContent = `Ristorante : ${i.Locale}`;
    myh3.textContent = `Tipologia cucina : ${i.tipologia}`;
    myP.textContent = `${i.Indirizzo}`;
    myP2.textContent = `${i.Telefono}`;
    img.setAttribute("src", i.img)
    img.setAttribute("width", "60%")
    img.setAttribute("padding", "5px")
    img.setAttribute("margin", "auto")

    const orari = i.Orari;
    console.log(orari);
    for (const x of orari) {
      const li = document.createElement("li");
      li.textContent = x;
      ul.appendChild(li);
      
    }

    console.log(myH1);
    article.appendChild(myH1);
    article.appendChild(myh3)
    article.appendChild(img);
    article.appendChild(myP);
    article.appendChild(myP2);
    section.appendChild(article);
    article.appendChild(ul);
    
  }

 
}

populateDiv(ListaRistoranti);
