//Página con eventos del Dom

import cipher from "./cipher.js";

//Declarar botones antes de darles funcionalidad

let cifrar = document.getElementById("cifrar");
let goBack = document.getElementById("goBack");

//cifrar
cifrar.addEventListener("click", () => {
  let mensaje = document.getElementById("mensaje").value;
  let mensajeMayuscula = mensaje.toUpperCase();
  let desplazamiento = document.getElementById("desplazamiento").value;

  let mensajeCifrado = cipher.encode(desplazamiento, mensajeMayuscula);

  document.getElementById("txtMensajeResultado").value = mensajeCifrado;

  document.getElementById("bloque1").style.display = "none";
  document.getElementById("bloque2").style.display = "block";
});

//descifrar
document.getElementById("descifrar").addEventListener("click", () => {
  let mensaje = document.getElementById("mensaje").value;
  let mensajeMayuscula = mensaje.toUpperCase();
  let desplazamiento = document.getElementById("desplazamiento").value;

  let mensajeDescifrado = cipher.decode(desplazamiento, mensajeMayuscula);

  document.getElementById("txtMensajeResultado").value = mensajeDescifrado;

  //funcionalidad ocultar el bloque
  document.getElementById("bloque1").style.display = "none";
  document.getElementById("bloque2").style.display = "block";
});

//button goBack
goBack.addEventListener("click", () => {
  document.getElementById("bloque1").style.display = "block";
  document.getElementById("bloque2").style.display = "none";
});
