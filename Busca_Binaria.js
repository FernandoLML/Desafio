const read = require ("readline-sync")

function buscaBinaria (lista, alvo) {
    let esquerda = 0;
    let direita = lista.length - 1;
    let resultado = -1;

    while (esquerda <= direita) {
        let meio = Math.floor((esquerda + direita) / 2);

        if (lista[meio] === alvo) {
            resultado = meio;
            direita = meio - 1;
        } else if (lista[meio] < alvo){
            esquerda = meio + 1;
        } else {
            direita = meio - 1;
        }
    }

    return resultado;
}

let lista = read.question("Digite os numeros de entrada (Separe-os por espaco): ")
            .split(" ") //Separar a string em uma substring para depois converter em inteiro
            .map(Number)
            .filter(n => !isNaN(n));

if (lista.length === 0){ 
    console.log("Erro: A lista deve conter apenas numeros!");
    process.exit(1);
}

let alvo = parseInt(read.question("Digite qual e o numero alvo: "));

if (isNaN(alvo)){ 
    console.log("Erro: O alvo deve ser um numero valido!");
    process.exit(1);
}

console.log(`Indice da primeira ocorrencia de ${alvo}: ${buscaBinaria(lista, alvo)}`);
