/** Exercício 6: Atualização de Cadastro

Escreva uma função atualizarCadastro que recebe dois parâmetros: cadastroAtivo (booleano) e saldo. Se o cadastro estiver ativo e o saldo maior que 0, imprima "Cadastro ativo e saldo positivo". Se o cadastro estiver ativo mas o saldo não for maior que 0, imprima "Cadastro ativo mas precisa regularizar saldo". Caso o cadastro não esteja ativo, independentemente do saldo, imprima "Por favor, atualize seu cadastro".

javascript*/

function atualizarCadastro(cadastroAtivo, saldo) {

    if (cadastroAtivo) {
  
      if (saldo > 0) {
  
        console.log("Cadastro ativo e saldo positivo");
  
      } else {
  
        console.log("Cadastro ativo mas precisa regularizar saldo");
  
      }
  
    } else {
  
      console.log("Por favor, atualize seu cadastro");
  
    }
  
  }