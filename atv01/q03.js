/** Faça um programa que exiba 3 números na tela.

Dica - exibindo (ou "imprimindo") números na tela:

var a = 23;
console.log(a);

*/
const prompt = require("prompt-sync")();


let n1 = Number(prompt("num1: "));
let n2 = Number(prompt("num2: "));
let n3 = Number(prompt("num3: "));

console.log("os numeros foram: " , n1, n2, n3);