/**aça um programa que leia 5 números e informe o maior número. */
let maiorNumero = -Infinity;

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt(`Qual o número ${i}: `));
    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
}

console.log(`O maior número é: ${maiorNumero}`);