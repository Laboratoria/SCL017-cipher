//Colocancando una funcion dentro de un obejeto y pasa  a ser una propiedad
const cipher = {
   encode: (mensaje,movimientos) =>{
  let encriptado="";
//Aplico un ciclo repetitivo para la formula
 for (let i=0;i<mensaje.length;i++){
  const asciiNum = mensaje[i].charCodeAt();

    if  (asciiNum >=65 && asciiNum <=90 ) { //Las letras mayusculas en ASCII
      movimientos =(movimientos %26+26)%26; //Para que pueda darse la vuelta
      const ubicacion = (asciiNum - 65 + movimientos);
      const formula = ubicacion %26 + 65;
      encriptado+= String.fromCharCode(formula);
    } /* else if  (asciiNum >=91 && asciiNum <=96 ) { // colocar rango de letras 
      movimientos =(movimientos % 6 + 6) % 6;
      const ubicacion = (asciiNum - 91 + movimientos);
      const formula = ubicacion %26 + 91;
      encriptado+= String.fromCharCode(formula);
    } */ else if (asciiNum >=97 && asciiNum <=122 ) { // colocar rango de letras 
      movimientos =(movimientos %26+26)%26;
      const ubicacion = (asciiNum - 97 + movimientos);
      const formula = ubicacion %26 + 97;
      encriptado+= String.fromCharCode(formula);
    } 
    else {
        encriptado+= String.fromCharCode(asciiNum)
      }
    
        
    }
    return encriptado;   
 },

//Lo mismo pero restando movimientos
 decode: (mensaje,movimientos) =>{
   let Desencriptado="";

 for (let i=0;i<mensaje.length;i++){
  const asciiNum = mensaje[i].charCodeAt();

    if  (asciiNum >=65 && asciiNum <=90 ) {
      movimientos =(movimientos %26+26)%26;
      const ubicacion = (asciiNum - 65 - movimientos); //aqui 
      const formula = ubicacion %26 + 65;
      Desencriptado+= String.fromCharCode(formula);
    } /*else if (asciiNum >=91 && asciiNum <=96 ) { // colocar rango de letras 
      movimientos =(movimientos % 6 + 6) % 6;
      const ubicacion = (asciiNum - 91 - movimientos);
      const formula = ubicacion %6 + 91;
      Desencriptado+= String.fromCharCode(formula);
    } */else if (asciiNum >=97 && asciiNum <=122 ) { // colocar rango de letras 
      movimientos =(movimientos %26+26)%26;
      const ubicacion = (asciiNum - 97 - movimientos);
      const formula = ubicacion %26 + 97;
      Desencriptado+= String.fromCharCode(formula);
    } 
    else {
        Desencriptado+= String.fromCharCode(asciiNum)
      }
    
        
    }
    return Desencriptado;   

 }

};

export default cipher;
