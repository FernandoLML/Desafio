const read = require ("readline-sync")

function expandir

function palindromo(str){

    let normalizando = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let invertido = normalizando.split('').reverse().join('');

    return normalizando === invertido;

}

let str = read.question("Digite uma string: ");
console.log(`A string ${str} eh um palindromo? \n ${palindromo(str)}`);