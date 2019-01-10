// import { w3 } from '.././w3.js';
import { servicio } from '.././servicio.js';
//constantes
"use strict"
var obj = {nombre:'Login', id:'barraLogin', atributo:'ac'}
var xsmxxl = {};
var prueba;

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
      document.querySelector("#iniciar").addEventListener("click", function(){ login() }, false);
    });
  }
  subirCSS(){
    var subirCSS = document.head;
    subirCSS.innerHTML += '<link rel="stylesheet" href="app.css">';
  }
  incluirServicio(){
    // var servicioNuevo = document.body;
    // var str = `
    //   <script src="https://www.gstatic.com/firebasejs/5.7.2/firebase.js"></script>
    //   <script>
    //     // Initialize Firebase
    //     var config = {
    //       apiKey: "AIzaSyAZgn1TeDnME8W6OVhQ-sjc3ziBgIBgzjA",
    //       authDomain: "prueba-f0cab.firebaseapp.com",
    //       databaseURL: "https://prueba-f0cab.firebaseio.com",
    //       projectId: "prueba-f0cab",
    //       storageBucket: "prueba-f0cab.appspot.com",
    //       messagingSenderId: "344060592616"
    //     };
    //     firebase.initializeApp(config);
    //   </script>`
    // servicioNuevo.innerHTML += str;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        // document.getElementById("user_div").style.display = "block";
        // document.getElementById("login_div").style.display = "none";

        var user = firebase.auth().currentUser;

        if(user != null){

          // var email_id = user.email;
          // document.getElementById("user_para").innerHTML = "Bienvenido : " + email_id +" a este pequeño proyecto :D";
          // setTimeout ("logout(), redireccionar()", 2500);
          // window.alert("Bienvenido");
          redireccionar();
          // setTimeout ("logout()", 2500);

        }
      } else {
        // No user is signed in.
        // document.getElementById("user_div").style.display = "none";
        // document.getElementById("login_div").style.display = "block"
      }
    });
  } //Fin de incluir servicio
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

function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    // window.alert(userEmail + " " +userPass);
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      // window.alert("Error : "+ errorMessage);
      window.alert("Error : correo y/o contraseñas no validas");
      // ...
    });
}

function logout(){
  firebase.auth().signOut();
}

function redireccionar(){
    //window.locationf="https://xsmxxl.github.io/responsive-pag-001/";
    var urlR = "/guardar_notas/home";
    $(location).attr('href',urlR);
}

const compLogin = new classCompLogin();

export { compLogin };
