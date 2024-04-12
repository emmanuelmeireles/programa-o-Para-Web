/**Implemente uma função que receba um número como parâmetro e retorne sua representação binária. Utilize essa função para converter diferentes números em binário. */

function conversao(num){

    num = Number(prompt('qual o numero escolhido: '));
    return num.toString(2); // o ( 2 ) converte em binario, ( 8 ) em octal.. e assim sucessivamente.
}