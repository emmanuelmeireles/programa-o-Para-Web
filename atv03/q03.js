/**Exercício 3: Depósito em Conta

Desenvolva uma função realizarDeposito que aceita dois argumentos: saldoAtual e valorDeposito. A função deve adicionar valorDeposito ao saldoAtual e imprimir o novo saldo com a mensagem "Depósito realizado com sucesso. Novo saldo: R$X".

javascript */


function realizarDeposito(saldoAtual, valorDeposito) {

    saldoAtual += valorDeposito;
  
    console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);
  
  }