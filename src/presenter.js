import {generarFizzbuzz,cadenaDeSecuenciaFizzBuzz} from "./fizzbuzz";

const limite = document.querySelector("#limite-numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const limiteValue = Number.parseInt(limite.value);
  div.innerHTML = "<p>" + cadenaDeSecuenciaFizzBuzz(limiteValue) + "</p>";
});
