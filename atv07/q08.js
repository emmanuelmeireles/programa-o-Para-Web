/**Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1. Números primos com laços */
let numero = parseInt(prompt("Digite um número inteiro para verificar se é primo:"));

let ehPrimo = true;

if (numero <= 1) {
    ehPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
}

if (ehPrimo) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}
