/**Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado. Utilize essa função para calcular a média de diferentes conjuntos de números. */

function media(num){
    let soma = 0
    for (int i = 0;i<num.length;i++){
        soma+= num[i];
    }
    let media = soma / num.length;
    return media;
}