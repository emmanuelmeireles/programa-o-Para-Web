/**Exercício 4: Transferência Entre Contas

Crie uma função realizarTransferencia que recebe quatro parâmetros: saldoOrigem, saldoDestino, valorTransferencia, e limiteTransferencia. Se o valorTransferencia for menor ou igual ao saldoOrigem e não ultrapassar o limiteTransferencia, subtraia o valor do saldoOrigem, adicione ao saldoDestino e imprima "Transferência realizada com sucesso". Caso contrário, imprima a mensagem adequada para o erro ocorrido.

javascript

 */

function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {

    if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
  
      saldoOrigem -= valorTransferencia;
  
      saldoDestino += valorTransferencia;
  
      console.log("Transferência realizada com sucesso");
  
    } else if (valorTransferencia > saldoOrigem) {
  
      console.log("Saldo insuficiente para transferência");
  
    } else {
  
      console.log("Valor excede o limite de transferência");
  
    }
  
  }