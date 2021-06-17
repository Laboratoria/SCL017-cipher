//Colocancando una funcion dentro de un obejeto y pasa  a ser una propiedad
const cipher = {
  encode: function(message, move)  { 
  /*  if (typeof message !=="string"){
    throw new TypeError("error");
  }
  if(typeof move !=="number"){
    throw new TypeError("");
  }*/

    let transform = "";
    //Aplico un ciclo repetitivo para la formula
    for (let i = 0; i < message.length; i++) {
      const asciiNum = message[i].charCodeAt();

      if (asciiNum >= 65 && asciiNum <= 90) {
        //Las letras mayusculas en ASCII
        move = ((move % 26) + 26) % 26; //Para que pueda darse la vuelta
        const location = asciiNum - 65 + move;
        const formulated = (location % 26) + 65;
        transform += String.fromCharCode(formulated);
      }  else if (asciiNum >= 97 && asciiNum <= 122) {
        // colocar rango de letras
        move = ((move % 26) + 26) % 26;
        const location = asciiNum - 97 + move;
        const formulated = (location % 26) + 97;
        transform += String.fromCharCode(formulated);
        
      } else {
        transform += String.fromCharCode(asciiNum);
      }
    }
    return transform;
  },

  //Lo mismo pero restando movimientos
  decode: function(message, move)  {
    /*if (typeof message !=="string"){
      throw new TypeError("error");
    }
    if(typeof move !=="number"){
      throw new TypeError("error2");
    }*/
    let untransform = "";

    for (let i = 0; i <message.length; i++) {
      const asciiNum = message[i].charCodeAt();

      if (asciiNum >= 65 && asciiNum <= 90) {
        //Las letras mayusculas en ASCII
        move = ((move % 26) + 26) % 26; //Para que pueda darse la vuelta
        const location = asciiNum + 65 - move;
        const formulated = (location % 26) + 65;
        untransform += String.fromCharCode(formulated);
        
      }  else if (asciiNum >= 97 && asciiNum <= 122) {
        // colocar rango de letras
        move = ((move % 26) - 26) % 26;
        const location = asciiNum - 97 - move;
        const formulated = (location % 26) + 97;
        untransform += String.fromCharCode(formulated);
      } else {
        untransform += String.fromCharCode(asciiNum);
      }
    }
   
    return untransform;
  },
};

export default cipher;
