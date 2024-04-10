/** Exercício 5: Cheque Especial

Implemente uma função checarChequeEspecial que recebe um parâmetro saldo. A função deve imprimir "Dentro do limite do cheque especial" se o saldo for negativo, e "Fora do limite do cheque especial" se o saldo for positivo ou zero.

javascript
*/
function checarChequeEspecial(saldo) {

    if (saldo < 0) {
  
      console.log("Dentro do limite do cheque especial");
  
    } else {
  
      console.log("Fora do limite do cheque especial");
  
    }
  
  }
  