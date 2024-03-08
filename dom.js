var p1 = document.getElementById("par1");
console.log(p1);
console.log(p1.innerHTML);
 p1.innerHTML = "nuovo testo";
console.log(p1.innerHTML);

let items = document.getElementsByClassName("item");
console.log(items[0].innerHTML);

console.log(Array.from(items));

let items_array = Array.from(items);

items_array.forEach(item => {
    console.log(item.innerHTML);
});

let paragrafo1 = document.createElement("p");

let text1 = document.createTextNode(`questo è un testo di prova`);

paragrafo1.appendChild(text1);

document.body.appendChild(paragrafo1);

