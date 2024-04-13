/**12) Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50
 */
function gerarTabuada() {
    let numero = Number(prompt('De qual número você deseja ver a tabuada (entre 1 e 10)?'));
    if (numero < 1 || numero > 10 || isNaN(numero)) {
        console.log('Por favor, insira um número válido entre 1 e 10.');
        return;
    }

    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} X ${i} = ${numero * i}`);
    }
}

gerarTabuada();
