/**Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for. */
function numPrimo(num){
    if(num<1){
        return false;
    }
    for (let i = 2; i<num; i++){
        if(num % 1 ===0){
            return false;
        }
    }
    return true;
}