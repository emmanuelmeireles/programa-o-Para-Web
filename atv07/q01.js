/**aça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem. */
function calcularPotencia() {
    let base = Number(prompt('Digite a base:'));
    let expoente = Number(prompt('Digite o expoente:'));
    let resultado = 1;

    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }

    console.log(`${base} elevado a ${expoente} é igual a ${resultado}`);
}

calcularPotencia();
