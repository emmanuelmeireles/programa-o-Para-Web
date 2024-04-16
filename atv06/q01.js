/** 
 1) Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
 */
function nota(){
    let nota = Number(prompt("qual a nota de 0 a 10: "));
    while (nota < 0 || nota < 10 || isNaN ){
        console.log("dado invalido");
        nota = Number(prompt("escolha o numero 0 a 10: "))
    }
    return nota;
}
