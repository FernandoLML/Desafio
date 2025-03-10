const read = require ("readline-sync")

function perfeito(x){
    let soma = 0;
    metade = Math.floor(x / 2);

    for (let y = 1; y <= metade; y++){
        if (x % y === 0){
            soma += y;
        }

    }

    return soma === x;
}

let x = parseInt(read.question("Digite um numero inteiro: "));

console.log(`O numero ${x} e perfeito? \n ${perfeito(x)}`);

