/** Jogo de adivinhação:
Pense em um número entre 1 e 100.
Peça ao usuário para adivinhar o número.
Diga ao usuário se o palpite é maior, menor ou igual ao número secreto.
Continue o jogo até que o usuário adivinhe o número secreto. */

const prompt = require ('prompt-sync')();

let numSecr = 57;
let palpite = Number(prompt('qual o "pule": '));

if (palpite < numSecr){
    console.log('o numero é maior ');
}else if(palpite<numSecr){
    console.log('o numero é menor');
}else{
    console.log('acertou Mizeravi');
}