/**Crie uma função que calcule o fatorial de um número. Utilize essa função para calcular o fatorial de diferentes números. */
function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}