/**
1. Calculadora de IMC:
Peça ao usuário seu peso e altura.
Calcule o IMC usando a fórmula: imc = peso / (altura * altura).
Exiba a categoria do IMC do usuário de acordo com a tabela:
IMC                  |   Categoria
Abaixo de 18,5  |  Abaixo do peso
18,5 - 24,9         |    Peso normal
25,0 - 29,9         |    Excesso de peso
30,0 - 34,9         |   Obesidade grau I
35,0 - 39,9         |    Obesidade grau II
Acima de 40,0  |  Obesidade grau III
 */
const prompt = require("prompt-sync")();

let peso = Number(prompt('Qual o seu peso: '));
let altura = Number(prompt('Qual a sua altura: '));

let imc = peso / (altura * altura);

console.log('O IMC é: ', imc);

if (imc <= 18.5){
    console.log('abaixo do peso');
}else if(imc > 18.5 && imc < 25){
    console.log('peso normal');
}else if(imc > 25 && imc < 30 ){
    console.log('excesso de peso');
}else if(imc > 30 && imc < 35 ){
    console.log('Obesidade grau I');
}else if(imc > 35 && imc < 40){
    console.log('Obesidade grau II');
}else if(imc > 40){
    console.log('Obesidade grau 3');
}