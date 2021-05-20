
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

cifrar.addEventListener("click",prueba);
descifrar.addEventListener("click", prueba);
// Creando una funcion para almacenar los datos

function prueba() {
  const mensaje = frases.value; 
  const movimientos = desplazamiento.value;
  resultado.value=textoCodificado(mensaje,movimientos);
}


// Formula usanndo las funciones 

 function textoCodificado(mensaje,movimientos){
    let encriptado="";

   for (let i=0;i<mensaje.length;i++){
    const asciiNum = mensaje[i].charCodeAt();
      if (asciiNum < 65 || asciiNum > 90) {
        encriptado+= String.fromCharCode(asciiNum);
      }
      if  (asciiNum >=65 && asciiNum <=90 ) {
        movimientos =(movimientos %26+26)%26;
        const ubicacion = (asciiNum - 65 + movimientos);
        const formula = ubicacion %26 + 65;
        encriptado+= String.fromCharCode(formula);
      }
      
   };
 return encriptado;   
 }
 

 
 