import readline = require("readline-sync");
import { dividir, multiplicar, somar } from "./operacoes/calculos";

let resultadoDivisao: number | null;

let numero1 = readline.questionFloat("Digite o primeiro numero: ");
let numero2 = readline.questionFloat("Digite o segundo numero: ");

console.log("O resultado da soma é: " + somar(numero1, numero2));

console.log("O resultado da multiplicarão é: " + multiplicar(numero1, numero2));

resultadoDivisao = dividir(numero1, numero2);

if (resultadoDivisao !== null) { // ferifica se o resultado da divisão é diferente de null
    console.log(`O resultado da divisão é: ${resultadoDivisao}`);
} else {
    console.log("Não é possível dividir por zero.");
}




