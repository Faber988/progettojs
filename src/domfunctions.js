function cambiaColoreTagName(tag_name, color) {
  var paragrafi = document.getElementsByTagName(tag_name);
  for (let index = 0; index < paragrafi.length; index++) {
    const element = paragrafi[index];
    element.style.color = color;
  }
}

function cambiaColoreId(id, color) {
  var paragrafi = document.getElementById(id);
  console.log(paragrafi);
  paragrafi.style.color = color;
}
