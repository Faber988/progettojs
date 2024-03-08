/*var x = 10;

incrementa(5);

function incrementa(valore) {
  var x = 1;
  x = x + valore;
  console.log(x);

}

console.log(x);

var name = "Fabrizio";

var surname ="Guercio";

name += " Faber";

console.log("il mio nome è "+ name +" "+surname);

var eta = 25;

console.log(typeof(eta.toString()));*/

/*const animals = ["cane", "gatto", "cavallo"];

console.log(animals);

console.log(animals[1]);

animals.push("topo"); // metodo push() aggiunge un elemento alla fine dell' array

console.log(animals);

// altro modo di creare array con parola chiave new

let marchi = new Array ("bmw","fiat","audi");

console.log(marchi);

marchi.unshift("ferrari"); // metodo unshift aggiunge elemento all'inizio

console.log(marchi);

marchi.pop(); // rimuove ultimo elemento array

console.log(marchi);

for (let index = 0; index < animals.length; index++) {
  console.log(animals[index]);
  
}

for (index in marchi) {
  console.log(marchi[index]);
  
}

let somma = (a, b) => {return a+b }

console.log(somma(2,3));

const numeri = [ 2 , 5 , 7 , 10];

const app = numeri.map (x => x * 2);

console.log(app);*/

/*const numeri = [1, 3, 5, 12, 18, 21];

function raddoppia_array(numeri) {
  const numeri_doppi = [];
  for (let i = 0; i < numeri.length; i++) {
    const element = numeri[i];
    numeri_doppi.push(element * 2);
  }

  return numeri_doppi;
}

console.log(raddoppia_array(numeri));

const utente = {
  nome: "Mario",
  cognome: "Rossi",
};

console.log(utente);
console.log(utente.nome);

function calcola_eta(data_nascita) {
  let dataCorrente = new Date();
  let annoCorrente = dataCorrente.getFullYear();

  let dataNascita = new Date(data_nascita);
  let annoDiNascita = dataNascita.getFullYear();

  let eta = annoCorrente - annoDiNascita;
  return eta;
}

console.log(calcola_eta("1988-04-28"));

function FormatDate(data) {
  let anno = data.substring(0, 4);
  let mese = data.substring(5, 7);
  let giorno = data.substring(8, 10);
  let datait = giorno + "/" + mese + "/" + anno;

  return datait;
}
console.log(FormatDate("1988-04-28")); */

giorno = 28;
mese = 4;
anno = 1988;

data = `data di nascita ${giorno}/${mese}/${anno}`;

console.log(data);

function book(title, autore, anno) {
  this.title = title;
  this.autore = autore;
  this.anno = anno;

  console.log(this);
  console.log(this.getSummary());
} // prototype si usa per risparmiare memoria quando questo dovrà essere usato numerose volte nelllo stesso modo
book.prototype.getSummary = function () {
  return `ciao, ${this.title} viene scritto da ${this.autore} nell'anno ${this.anno}`;
};

const book1 = new book("otello", "tizio", "1988");
const book2 = new book("mobydick", "tizio2", "2001");

console.log(book2.title, book1.title);
console.log(book2.getSummary());
console.log(book1.getSummary());
console.log(book1);

let chiavi = Object.keys(book1);

console.log(chiavi);

var carrello = [
  { nome: "mele", quantita: 3 },
  { nome: "banane", quantita: 2 },
  { nome: "mele", quantita: 5 },
  { nome: "arance", quantita: 1 },
  { nome: "mele", quantita: 2 },
  { nome: "arance", quantita: 5 },
];

function sommaQuantitaArticolo(carrello, nome_articolo) {
  let somma = 0;
  for (let i = 0; i < carrello.length; i++) {
    const articolo = carrello[i];
    if (nome_articolo == articolo.nome) {
      somma += articolo.quantita;
    }
  }
  return somma;
}
let somma = sommaQuantitaArticolo(carrello, "mele");

console.log(somma);

// Declaring class
class Profile {
  // Constructor of profile class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    // Method to return name
    return this.name;
  }

  getAge() {
    // Method to return age
    return this.age;
  }

  getClass() {
    return this;
  }
}
const Profile1 = new Profile("marco", 23);

console.log(Profile1)


/*

// Class Student extends class Profile  
class Student extends Profile {  
      
  // Each data of class Profile can be 
  // accessed from student class. 
  constructor(name, age, languages) { 
        
      // Acquiring of attributes of parent class 
      super(name, age);  
      this.lang = [...languages]; 
  } 

  // Method to display all attributes 
  getDetails() { 
      console.log("Name : " + this.name); 
      console.log("Age : " + this.age); 
      console.log("Languages : " + this.lang); 
  } 
} 

// Creating object of child class with passing of values 
var student1 = new Student("Ankit Dholakia", 24, 
          ['Java', 'Python', 'PHP', 'JavaScript']); 
student1.getDetails();  
console.log(student1)
*/
let squadre = {
  squadra : "juve",
  squadra2 : "milan",  
  squadra3 : "inter",
  paese : {
    nazione:"italia",
    lega : "serie a"
  }
}

let elenco = Object.keys(squadre);
let nomisquadre = Object.values(squadre);

console.log(elenco);
console.log(nomisquadre);

const { squadra, squadra2, squadra3, paese: {lega}} = squadre;  // destrutturazione dell' oggetto
console.log(squadra, squadra2, squadra3, lega);


