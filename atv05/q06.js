/**Implemente uma função que inverta a ordem dos elementos em um array. Utilize essa função para inverter a ordem de diferentes conjuntos de elementos */

function inverseArray(arr) {
    let inicio = 0;
    let fim = arr.length - 1;
    while (inicio < fim) {
        let temp = arr[inicio];
        arr[inicio] = arr[fim];
        arr[fim] = temp;
        inicio++;
        fim--;
    }
    return arr;