/** Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length
*/
function leiaEVal() {
    let nome = prompt('Digite seu nome:');
    while(nome.length <= 3) {
        console.log('Nome deve ter mais de 3 caracteres.');
        nome = prompt('Digite seu nome:');
    }

    let idade = prompt('Digite sua idade:');
    idade = Number(idade);
    while(isNaN(idade) || idade < 0 || idade > 150) {
        console.log('Idade deve estar entre 0 e 150.');
        idade = Number(prompt('Digite sua idade:'));
    }

    let salario = prompt('Digite seu salário:');
    salario = Number(salario);
    while(isNaN(salario) || salario <= 0) {
        console.log('Salário deve ser maior que zero.');
        salario = Number(prompt('Digite seu salário:'));
        // nao consegui fazer sozinho
        
