/**Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, por quais número ele é divisível. */
let numero = parseInt(prompt("Digite um número inteiro para verificar se é primo:"));

let ehPrimo = true;
let divisores = [];

if (numero <= 1) {
    ehPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            divisores.push(i);
        }
    }
}

if (ehPrimo) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo. É divisível por: " + divisores.join(", "));
}
