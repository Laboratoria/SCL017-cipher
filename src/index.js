import cipher from "./cipher.js";


// Hacer que el texto escriba en mayusuculas

// Crear una funcion de cifrado
//Impirmir el texto en el cuadro dos

//Llamar todos los eventos
const phrases = document.getElementById("frases");
const displacement= document.getElementById("desplazamiento");
const code= document.getElementById("cifrar");
const result = document.getElementById("resultado");
const decipher = document.getElementById("descifrar");

//Recibir la informacion del boton

code.addEventListener("click", btnCode);
decipher.addEventListener("click", btnDecipher);
// Creando una funcion para almacenar los datos del botn cifrar

function btnCode() {
  const message = phrases.value;
  const move = displacement.value;
  result.value = cipher.encode(message, move);
}
// / Creando una funcion para almacenar los datos del botn descifrar

function btnDecipher() {
  const message = phrases.value;
  const move = displacement.value;
  result.value = cipher.decode(message, move);
}

//Cambiar funcion a dentro de un objeto en cipher

// Formula usanndo las funciones
/*
 function textoCodificado(mensaje,movimientos) {
    let encriptado="";

   for (let i=0;i<mensaje.length;i++){
    const asciiNum = mensaje[i].charCodeAt();

      if  (asciiNum >=65 && asciiNum <=90 ) {
        movimientos =(movimientos %26+26)%26;
        const ubicacion = (asciiNum - 65 + movimientos);
        const formula = ubicacion %26 + 65;
        encriptado+= String.fromCharCode(formula);
      } /* else if  (asciiNum >=91 && asciiNum <=96 ) { // colocar rango de letras 
        movimientos =(movimientos % 6 + 6) % 6;
        const ubicacion = (asciiNum - 91 + movimientos);
        const formula = ubicacion %26 + 91;
        encriptado+= String.fromCharCode(formula);
      }  else if (asciiNum >=97 && asciiNum <=122 ) { // colocar rango de letras 
        movimientos =(movimientos %26+26)%26;
        const ubicacion = (asciiNum - 97 + movimientos);
        const formula = ubicacion %26 + 97;
        encriptado+= String.fromCharCode(formula);
      } 
      else {
          encriptado+= String.fromCharCode(asciiNum)
        };
      
          
      }
      return encriptado;   
   };
  
   function textoDescodificado(mensaje,movimientos){
     let Desencriptado="";

   for (let i=0;i<mensaje.length;i++){
    const asciiNum = mensaje[i].charCodeAt();

      if  (asciiNum >=65 && asciiNum <=90 ) {
        movimientos =(movimientos %26+26)%26;
        const ubicacion = (asciiNum - 65 - movimientos);
        const formula = ubicacion %26 + 65;
        Desencriptado+= String.fromCharCode(formula);
      } /*else if (asciiNum >=91 && asciiNum <=96 ) { // colocar rango de letras 
        movimientos =(movimientos % 6 + 6) % 6;
        const ubicacion = (asciiNum - 91 - movimientos);
        const formula = ubicacion %6 + 91;
        Desencriptado+= String.fromCharCode(formula);
      } else if (asciiNum >=97 && asciiNum <=122 ) { // colocar rango de letras 
        movimientos =(movimientos %26+26)%26;
        const ubicacion = (asciiNum - 97 - movimientos);
        const formula = ubicacion %26 + 97;
        Desencriptado+= String.fromCharCode(formula);
      } 
      else {
          Desencriptado+= String.fromCharCode(asciiNum)
        };
      
          
      }
      return Desencriptado;   

   }*/
