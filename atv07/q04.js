/**Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120. Calcular fatorial com laços */
let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));
let fatorial = 1;

for (let i = numero; i > 0; i--) {
    fatorial *= i;
}

console.log(numero + "! = " + fatorial);
