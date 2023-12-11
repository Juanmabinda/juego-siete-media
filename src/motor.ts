import { partida } from "./modelo";

import {
  mostrarCarta,
  muestraPuntuacion,
  deshabilitaBotonMePlanto,
  deshabilitaBotonDameCarta,
  habilitaBotonMePlanto,
  habilitaBotonNuevaPartida,
  queHubieraPasado,
  pintarMensajeFinal
} from "./ui";

export const generaNumeroAleatorio = () :number => Math.floor(Math.random() * 12) + 1;

export const generaCartaAleatoria = (numero : number) : number => {
  let numeroAleatorio = numero

  if (numeroAleatorio === 8 || numeroAleatorio === 9) {
    numeroAleatorio += 2;
  };

  return numeroAleatorio;
};

export const dameCarta = (numero : number) : void => {
  mostrarCarta(numero);
  sumarPuntuacion(numero);
  muestraPuntuacion();
  if (partida.puntuacion >= 7.5) {
    pintarMensajeFinal(puntuacionFinal());
    deshabilitaBotonMePlanto();
    deshabilitaBotonDameCarta();
  }else {
    habilitaBotonMePlanto();
    habilitaBotonNuevaPartida();
  };
};

export const sumarPuntuacion = (numero : number) : number => {
  numero <= 7
  ? partida.puntuacion += numero
  : partida.puntuacion += 0.5;

  return partida.puntuacion;
};

export const mePlanto = () : void => {
  pintarMensajeFinal(puntuacionFinal());
  deshabilitaBotonDameCarta();
  deshabilitaBotonMePlanto();
  queHubieraPasado();
};

export const reiniciarPuntuacion = () => partida.puntuacion = 0;


export const puntuacionFinal = () : string => {

  let mensaje : string = "";

  if (partida.puntuacion < 5) {
    mensaje = "Fuiste muy conservador/a! 😝";
  } else if (partida.puntuacion < 6 ) {
    mensaje = "Apa te entró el cagazo, no? 🤭🤭🤭";
  } else if (partida.puntuacion >= 6 && partida.puntuacion <= 7) {
    mensaje = "Casi casi... 🙃🙃🙃";
  } else if (partida.puntuacion === 7.5) {
    mensaje = "Esaaaaa! Felicitaciones!! 🎉🎉🎉🎊";
  }else if(partida.puntuacion > 7.5) {
    mensaje = "Perdiste 😵";
  }

  return mensaje;

};
