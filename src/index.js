
import cipher from './cipher.js';
console.log("Hola");

 // Hacer que el texto escriba en mayusuculas 
 
 // Crear una funcion de cifrado 
 //Impirmir el texto en el cuadro dos 

 //Llamar todos los eventos
const frases = document.getElementById("frases");
const desplazamiento = document.getElementById("desplazamiento");
const cifrar = document.getElementById("cifrar");
const resultado = document.getElementById("resultado");
const  descifrar = document.getElementById("descifrar");

//Recibir la informacion del boton

cifrar.addEventListener("click",btnCifrar);
descifrar.addEventListener("click", btnDescifrar);
// Creando una funcion para almacenar los datos del botn cifrar

function btnCifrar() {
  const mensaje = frases.value; 
  const movimientos = desplazamiento.value;
  resultado.value=textoCodificado(mensaje,movimientos);
}
// / Creando una funcion para almacenar los datos del botn descifrar

function btnDescifrar(){
  const mensaje = frases.value; 
  const movimientos = desplazamiento.value;
  resultado.value=textoDescodificado(mensaje,movimientos)
}
//Cambiar funcion 

// Formula usanndo las funciones 

 function textoCodificado(mensaje,movimientos){
    let encriptado="";

   for (let i=0;i<mensaje.length;i++){
    const asciiNum = mensaje[i].charCodeAt();

      if  (asciiNum >=65 && asciiNum <=90 ) {
        movimientos =(movimientos %26+26)%26;
        const ubicacion = (asciiNum - 65 + movimientos);
        const formula = ubicacion %26 + 65;
        encriptado+= String.fromCharCode(formula);
      } else if (asciiNum >=91 && asciiNum <=97 ) { // colocar rango de letras 
        movimientos =(movimientos %26+26)%26;
        const ubicacion = (asciiNum - 91 + movimientos);
        const formula = ubicacion %26 + 97;
        encriptado+= String.fromCharCode(formula);
      } else if (asciiNum >=97 && asciiNum <=122 ) { // colocar rango de letras 
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
      } else if (asciiNum >=91 && asciiNum <=97 ) { // colocar rango de letras 
        movimientos =(movimientos %26+26)%26;
        const ubicacion = (asciiNum - 91 - movimientos);
        const formula = ubicacion %26 + 97;
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

   }
 
 

 
 