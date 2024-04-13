/**Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos. Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados. */
let numero = parseInt(prompt("Digite um número inteiro para encontrar todos os números primos até ele:"));

let numerosPrimos = [];
let divisoes = 0;

for (let i = 2; i <= numero; i++) {
    let ehPrimo = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        divisoes++;
        if (i % j === 0) {
            ehPrimo = false;
            break;
        }
    }
    if (ehPrimo) {
        numerosPrimos.push(i);
    }
}

console.log("Números primos até " + numero + ": " + numerosPrimos.join(", "));
console.log("Número total de divisões realizadas: " + divisoes);
