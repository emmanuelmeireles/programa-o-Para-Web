/** 2)Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.*/

function login(){
    let nome = prompt('Insira seu nome: ');
    let senha = prompt('Insira sua senha: ');

    while(senha === nome){
        console.log('Erro: a senha não pode ser igual ao nome do usuário.');
        senha = prompt('Insira sua senha: ');
    }

    return 'Login bem-sucedido!';
}