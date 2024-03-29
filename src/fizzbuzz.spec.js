import {generarFizzbuzz,cadenaDeSecuenciaFizzBuzz} from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Deberia generar el mismo numero para uno que no tiene regla para el 1", () => {
    expect(generarFizzbuzz(1)).toEqual("1");
  });
  it("Deberia generar el mismo numero para uno que no tiene regla para el 2", () => {
    expect(generarFizzbuzz(2)).toEqual("2");
  });
  it("Deberia generar el mismo numero para uno que no tiene regla para el 2", () => {
    expect(generarFizzbuzz(3)).toEqual("Fizz");
  });
  it("Deberia generar Fizz para un numero que sigue una regla comoo los multiplos de 3", () => {
    expect(generarFizzbuzz(6)).toEqual("Fizz");
  });
  it("Deberia generar Buzz para un numero que sigue una regla comoo los multiplos de 5", () => {
    expect(generarFizzbuzz(5)).toEqual("Buzz");
  });
  it("Deberia generar Buzz para un numero que sigue una regla comoo los multiplos de 10", () => {
    expect(generarFizzbuzz(10)).toEqual("Buzz");
  });
  it("Deberia generar FizzBuzz para un numero que sigue una regla comoo los multiplos de 3 y de 5", () => {
    expect(generarFizzbuzz(15)).toEqual("FizzBuzz");
  });
  it("Deberia generar la cadena de una secuencia de FizzBuzz que tiene un limite", () => {
    expect(cadenaDeSecuenciaFizzBuzz(30)).toEqual("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz");
  });
});
