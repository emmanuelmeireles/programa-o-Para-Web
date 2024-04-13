/**Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores. */
let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números:"));
let numeros = [];

for (let i = 0; i < quantidadeNumeros; i++) {
    numeros.push(parseFloat(prompt("Digite o número " + (i + 1) + ":")));
}

let menor = numeros[0];
let maior = numeros[0];
let soma = 0;

for (let i = 0; i < quantidadeNumeros; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    soma += numeros[i];
}

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);
