const read = require ("readline-sync");

function calcularSaque(valor) {
    const cedulas = [100, 50, 20, 10, 5, 2, 1];
    let resultado = [];

    for (let nota of cedulas) {
        let quantidade = Math.floor(valor / nota);
        if (quantidade > 0) {
            resultado.push(`${quantidade} nota${quantidade > 1 ? 's' : ''} de ${nota}`);
            valor -= quantidade * nota;
        }
    }

    return resultado;
}

let valor = parseInt(read.question("Digite um valor inteiro: "));

if (isNaN(valor) || valor <= 0) {
    console.log("Erro: Digite um valor inteiro positivo.");
} else {
    let resposta = calcularSaque(valor);
    console.log("\nQuantidade minima de notas e moedas necessarias: ");
    console.log(resposta.join("\n"));
}