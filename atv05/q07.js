/**Crie uma função que receba um valor e uma porcentagem como parâmetros. A função deve retornar o valor acrescido da porcentagem indicada. */

function acresc(valor, porcentagem){
    valor = Number(prompt('qual o valor: '));
    porcentagem = Number(prompt('quantos porcento(%): '));
    return valor += valor*(porcentagem/100);
}