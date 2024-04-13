/**Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16. */
while (true) {
    let numero = parseInt(prompt("Digite um número inteiro positivo menor que 16 para calcular o fatorial (ou digite um número negativo para sair):"));

    if (numero < 0) {
        console.log("Programa encerrado.");
        break;
    } else if (numero >= 16) {
        console.log("O número deve ser menor que 16.");
        continue;
    } else if (isNaN(numero) || numero % 1 !== 0 || numero < 0) {
        console.log("Por favor, insira um número inteiro positivo válido.");
        continue;
    }

    let fatorial = 1;

    for (let i = numero; i > 0; i--) {
        fatorial *= i;
    }

    console.log(numero + "! = " + fatorial);
}
