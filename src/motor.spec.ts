import { partida } from "./modelo";
import * as motor from "./motor";
import { vi } from "vitest";


describe("Comprobar si ha ganado el juego", () => {

  it("Al obtener una puntuación igual a 7.5, se gana el juego", () => {
    // Arrange
    partida.puntuacion = 7.5;
    const resultadoEsperado : string = "Esaaaaa! Felicitaciones!! 🎉🎉🎉🎊";

    // Act
    const resultado : string = motor.puntuacionFinal()

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Al obtener una puntuación mayor a 7.5, se pierde el juego", () => {
    // Arrange
    const resultadoEsperado : string = "Perdiste 😵";
    partida.puntuacion = 8;

    // Act
    const resultado : string = motor.puntuacionFinal();

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Al obtener una puntuación menor a 5 debería indicar que el jugador fue muy conservador", () => {
    // Arrange
    const resultadoEsperado : string = "Fuiste muy conservador/a! 😝";
    partida.puntuacion = 3;

    // Act
    const resultado : string = motor.puntuacionFinal();

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });


  describe("generaCartaAleatoria", () => {

    it("calculaValorCartaValido devuelve 10 si numeroAleatorio es igual a 8", () => {
      // Arrange
      const resultadoEsperado : number = 10;
      vi.spyOn(global.Math, "random").mockReturnValue(0.7);
      const numeroAleatorio : number = motor.generaNumeroAleatorio();

      // Act
      const resultado : number = motor.calculaValorCartaValido(numeroAleatorio);

      // Assert
      expect(resultado).toBe(resultadoEsperado)
    });

    it("generaCartaAleatoria debería devolver 11 si numeroAleatorio es igual a 9", () => {
      // Arrange
      const resultadoEsperado : number = 11;
      vi.spyOn(global.Math, "random").mockReturnValue(0.8)
      const numeroAleatorio : number = motor.generaNumeroAleatorio()

      // Act
      const resultado : number = motor.calculaValorCartaValido(numeroAleatorio)

      // Assert
      expect(resultado).toBe(resultadoEsperado);
    });

  });

  describe("Devuelve y suma el valor de la carta obtenida", () => {

    it("Al sacar AS (1), debería sumar 1 a la puntuación", () => {
      // Arrange
      partida.puntuacion = 0;
      const resultadoEsperado : number = 1;
      const numeroAleatorio : number = 1;

      // Act
      const resultado = motor.asignaPuntuacion(numeroAleatorio);

      // Assert
      expect(resultado).toBe(resultadoEsperado);
    });

    it("Al sacar rey (12), debería sumar 0.5 a la puntuación", () => {
      // Arrange
      partida.puntuacion = 0;
      const resultadoEsperado : number = 0.5;
      const numeroAleatorio : number = 12;

      // Act
      const resultado = motor.asignaPuntuacion(numeroAleatorio);

      // Assert
      expect(resultado).toBe(resultadoEsperado);
    });
  });

});
