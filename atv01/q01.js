/**Faça um programa que leia 3 números e exiba-os na tela.

// abre uma janelinha com um "prompt" que lê um número digitado pelo
// usuário e atribui o resultado a variável "v1"
var v1;
v1 = Number (prompt ()); */


const prompt = require("prompt-sync")();
let v1 = prompt('primeiro num: '); 
let v2 = prompt('segundo num: ');
let v3 = prompt('terceiro num: ');

console.log("Os números digitados foram:");
console.log("Número 1:", v1);
console.log("Número 2:", v2);
console.log("Número 3:", v3);

