/**Exercício 7: Limite de Crédito

Crie uma função avaliarCredito que recebe três parâmetros: saldo, historicoCredito (um valor booleano que indica se o histórico de crédito é bom) e rendaMensal. A função deve imprimir "Crédito aprovado" se o saldo for superior a R1.000, o histórico de crédito for bom e a renda mensal for superior a R3.000. Caso contrário, imprima "Crédito negado".

javascript */

function avaliarCredito(saldo, historicoCredito, rendaMensal) {

    if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
  
      console.log("Crédito aprovado");
  
    } else {
  
      console.log("Crédito negado");
  
    }
  
  }