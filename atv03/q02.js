/**Exercício 2: Saque em Conta

Escreva uma função realizarSaque que recebe dois parâmetros: saldoAtual e valorSaque. Se o valorSaque for menor ou igual ao saldoAtual, subtraia o valor do saldo e imprima "Saque realizado com sucesso. Saldo atual: R$X". Caso contrário, imprima "Saldo insuficiente".

javascript

 */

function realizarSaque(saldoAtual, valorSaque) {

    if (valorSaque <= saldoAtual) {
  
      saldoAtual -= valorSaque;
  
      console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);
  
    } else {
  
      console.log("Saldo insuficiente");
  
    }
  
  }