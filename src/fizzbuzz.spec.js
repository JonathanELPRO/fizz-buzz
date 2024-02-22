import generarFizzbuzz from "./fizzbuzz.js";

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
  it("Deberia generar Buzz para un numero que sigue una regla comoo los multiplos de 5", () => {
    expect(generarFizzbuzz(10)).toEqual("Buzz");
  });
});
