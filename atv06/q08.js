/**Faça um programa que leia 5 números e informe a soma e a média dos números.
 */function calcularSomaEMedia() {
    let soma = 0;
    let media;
    let numero;

    for (let i = 1; i <= 5; i++) {
        numero = Number(prompt(`Digite o número ${i}:`));
        soma += numero;
    }

    media = soma / 5;

    console.log(`A soma dos números é: ${soma}`);
    console.log(`A média dos números é: ${media}`);
}

calcularSomaEMedia();
