import { w3 } from '.././w3.js';
import { compLogin } from '.././compLogin/compLogin.js';

//constantes
var obj = {nombre:'Navegacion',id:'barraNavegacion'}

//clase principal
class compNavegacionClass {
  constructor(){
    var div = document.createElement("div");
    div.id=obj.nombre;
    div.setAttribute("class", "container");
    div.setAttribute("w3-include-html", "compNavegacion/compNavegacion.html");
    var dondeInsertar = document.getElementById('contenedor');
    dondeInsertar.append(div);
    w3.includeHTML( ()=>{
      // aquí va todo el código callback
      w3.displayObject(obj.nombre, obj);
      compLogin.implementar();
      compLogin.subirCSS();
    });
  }
}

const compNavegacion = new compNavegacionClass();

export { compNavegacion };
