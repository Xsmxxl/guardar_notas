"use strict"
var obj = {nombre:'Contenido', id:'conteniDeInicio', atributo:'contenido'}
var xsmxxl = {};

//clase principal
class classCompContenido {
  constructor(){
    //Creando elemento del tipo "div"
    var div = document.createElement("div");
    div.id=obj.nombre;
    div.setAttribute("class", "container mt-5");
    div.setAttribute(obj.atributo, "compContenido/compContenido.html");
    var dondeInsertar = document.getElementById('contenedor');
    dondeInsertar.append(div);
    xsmxxl.includeHTML();
  }
}

xsmxxl.includeHTML = function(cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute(obj.atributo);
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute(obj.atributo);
          xsmxxl.includeHTML(cb);
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
};

const compContenido = new classCompContenido();

export { compContenido };
