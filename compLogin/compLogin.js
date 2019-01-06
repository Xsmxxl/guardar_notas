// import { w3 } from '.././w3.js';

//constantes
"use strict"
var obj = {nombre:'Login', id:'barraLogin', atributo:'ac'}
var xsmxxl = {};

//clase principal
class classCompLogin {
  constructor(){
    //..Nada por aquí
  }
  implementar(){
    //Creando elemento del tipo "div"
    var a = document.createElement("a");
    a.id=obj.nombre;
    a.setAttribute("class", "nav-item ml-auto");
    a.setAttribute(obj.atributo, "compLogin/compLogin.html");
    var dondeInsertar = document.getElementById('navbarTogglerDemo01');
    dondeInsertar.append(a);
    xsmxxl.includeHTML( ()=>{
      // w3.displayObject(obj.nombre, obj);
      // aquí va todo el código callback
    });
  }
  subirCSS(){
    var subirCSS = document.head;
    subirCSS.innerHTML += '<link rel="stylesheet" href="app.css">';
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

const compLogin = new classCompLogin();

export { compLogin };
