let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

 let stageEl = document.getElementById("stage")

 let fightButton = document.getElementById("fight")

 fightButton.addEventListener("click", function() {
    let sx = fighters[Math.floor(Math.random()*16)];
  
    let dx = fighters[Math.floor(Math.random()*16)];

 // let emoji = document.createElement("div")
 // let symbol = document.createTextNode(sx)
 // let vs = document.createTextNode("vs")
 // let symbol2 = document.createTextNode(dx)
 // emoji.appendChild(symbol)
 // emoji.appendChild(vs)
 // emoji.appendChild(symbol2)
 // stageEl.appendChild(emoji)

  let html = `<div>${sx} vs ${dx}</div>`;
  stageEl.innerHTML = html;
 })