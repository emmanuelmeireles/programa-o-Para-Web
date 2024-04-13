/**Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação. */
function calcularCrescimento() {
    let continuar = true;
    while (continuar) {
        let populacaoA = prompt('Informe a população inicial do país A:');
        let taxaCrescimentoA = prompt('Informe a taxa de crescimento anual do país A (em %):');
        let populacaoB = prompt('Informe a população inicial do país B:');
        let taxaCrescimentoB = prompt('Informe a taxa de crescimento anual do país B (em %):');

        populacaoA = Number(populacaoA);
        taxaCrescimentoA = Number(taxaCrescimentoA) / 100;
        populacaoB = Number(populacaoB);
        taxaCrescimentoB = Number(taxaCrescimentoB) / 100;

        if (!populacaoA || !taxaCrescimentoA || !populacaoB || !taxaCrescimentoB ||
            isNaN(populacaoA) || isNaN(taxaCrescimentoA) || isNaN(populacaoB) || isNaN(taxaCrescimentoB) ||
            populacaoA <= 0 || taxaCrescimentoA <= 0 || populacaoB <= 0 || taxaCrescimentoB <= 0) {
            console.log('Por favor, insira valores numéricos positivos válidos.');
            continue;
        }

        let anos = 0;
        while (populacaoA <= populacaoB) {
            populacaoA += populacaoA * taxaCrescimentoA;
            populacaoB += populacaoB * taxaCrescimentoB;
            anos++;
        }

        console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
        continuar = confirm('Deseja realizar outra operação?');
    }
}

calcularCrescimento();
