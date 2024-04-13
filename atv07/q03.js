/**A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo. Sequência de Fibonacci com laços A série de Fibonacci é formada pela sequência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500. */let anterior = 0;

let atual = 1;

console.log("Sequência de Fibonacci até que o valor seja maior que 500:");

while (atual <= 500) {
    console.log(atual);
    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}
