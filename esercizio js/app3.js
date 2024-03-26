

    let table = document.getElementById("tabella1")

  /*  let cells =  table.getElementsByTagName("td");

    for (let i = 0 ; i < cells.length ; i++) {
        cells[i].addEventListener("click", function(){
        let highlightCells = table.getElementsByClassName("highlight");
        for ( let j = 0; j < highlightCells.length ; j++) {
            highlightCells[j].classList.remove("highlight")

        }

        this.classList.add("highlight");  // parola chiave list utilizzabile grazie ad adeventlistener
    })
}*/
  
table.addEventListener("click", function(event){
    if( event.target.tagName === "TD") {
        let highlightCells = table.getElementsByClassName("highlight");
        for ( let i = 0; i < highlightCells.length; i++) {
            highlightCells[i].classList.remove("highlight");
        }

        event.target.classList.add("highlight");
    }
})

document.getElementById("celsius").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
             let celsius =  document.getElementById("celsius").value;
             // let celsius = event.target.value
             let fahrenheit =  convertCelsiusToFahrenheit(celsius);
             document.getElementById("fahrenheit").innerHTML = fahrenheit;
         }
      });
     
     function convertCelsiusToFahrenheit(celsius) {
         var fahrenheit = celsius * 9/5 + 32;
        return fahrenheit
     }

     document.getElementById('table-button').addEventListener('click', aggiungiRiga);

function aggiungiRiga() {
  var tabella = document.getElementById('tabella1');
  var nuovaRiga = document.createElement('tr');
  var numCelle = 2;
  for (var i = 0; i < numCelle; i++) {
    var cella = document.createElement('td');
    
    nuovaRiga.appendChild(cella);
  }
  tabella.appendChild(nuovaRiga);
}

