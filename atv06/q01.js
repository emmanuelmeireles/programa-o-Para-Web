/** 
 1) Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
 */
 function notaCheck(){
    let nota = Number(prompt('Qual a nota de 0 a 10 a escolher: '));
    while(nota < 0 || nota > 10 || isNaN(nota)){
        console.log('Dado inválido');
        nota = Number(prompt('Qual a nota de 0 a 10 a escolher: '));
    }
    return nota;
}