/** Desenvolva uma função que verifique se uma palavra é um palíndromo (lê-se da mesma forma da esquerda para a direita e vice-versa). Retorne true se for um palíndromo e false se não for.*/
function isPalindrome(palavra) {
    let reversed = palavra.split('').reverse().join('');
    if (palavra === reversed) {
        return true;
    } else {
        return false;
    }
}