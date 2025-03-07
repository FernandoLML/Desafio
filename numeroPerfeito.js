const read = require ("readline-sync")

function perfeito(x){
    int: soma, y, metade;
    let resultado
    metade = x/2;
    y = 1

    while (y <= metade){

        if (x % y == 0){
            soma = soma + y
        }
        
        y = y + 1;
    }

    if (soma == x){
        resultado = TRUE
    } 
    else {
        resultado = FALSE
    }

    return resultado;
}

let x = parseInt(read.question("Digite um número inteiro: "));

console.log(`${perfeito(x)}`);

