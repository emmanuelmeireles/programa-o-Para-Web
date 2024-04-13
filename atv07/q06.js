/**Altere o programa anterior para que ele aceite apenas números entre 0 e 1000. */
let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números:"));
let numeros = [];

for (let i = 0; i < quantidadeNumeros; i++) {
    let numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));

    while (numero < 0 || numero > 1000 || isNaN(numero)) {
        numero = parseFloat(prompt("Digite um número entre 0 e 1000 para o número " + (i + 1) + ":"));
    }

    numeros.push(numero);
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
