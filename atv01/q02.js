/**Faça um programa que leia 3 números, some-os e exiba a média entre eles.
Dicas
A média entre dois números, é a soma dos dois números divididos por 2
A média entre três números, é a some dos três números divididos por 3
A média entre 'n' números, é a some dos 'n' números divididos por 'n' */

const prompt = require ('prompt-sync')();

let num1 = Number(prompt('1 numero: '));
let num2 = Number(prompt('2 numero: '));
let num3 = Number(prompt('3 numero: '));

media = (num1+num2+num3)/3;

console.log("a media dos numeros é : ", media);


