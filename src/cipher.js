const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const cipher = {
  encode: (desplazamiento, texto) => {
    let resultado = "";
    desplazamiento = ((desplazamiento % 26) + 26) % 26;

    // con este for se va recorriendo cada una de las letras
    if (texto) {
      for (let i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto[i]) != -1) {
          let posicion = (letras.indexOf(texto[i]) + desplazamiento) % 26;
          resultado = resultado + letras[posicion];
        } else {
          resultado = resultado + texto[i];
        }
      }
    }

    return resultado;
  },

  decode: (desplazamiento, texto) => {
    let resultado = "";

    desplazamiento = ((desplazamiento % 26) + 26) % 26;

    // Con este for se va recorriendo cada una de las letras, la busca en el diccionario y si existe le calcula la posicion.
    // Si la letra no existe se deja pasar
    if (texto) {
      for (let i = 0; i < texto.length; i = i + 1) {
        if (letras.indexOf(texto[i]) != -1) {
          let posicion = (letras.indexOf(texto[i]) - desplazamiento) % 26;

          //otra instruccción en caso de encontrar un negativo
          if (posicion < 0) {
            posicion = posicion + 26;
          }

          resultado = resultado + letras[posicion];
        } else {
          resultado = resultado + texto[i];
        }
      }
    }

    return resultado;
  },
};

export default cipher;
