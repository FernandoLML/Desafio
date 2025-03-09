const read = require ("readline-sync")

function expandirCentro(s, esquerda, direita) {
    while (esquerda >= 0 && direita < s.length && s[esquerda] === s[direita]){
        esquerda--;
        direita++;
    }
    return s.slice(esquerda + 1, direita);
}

function maiorSubstringPalidromica(s){
    if (!s || s.length === 0) return "";

    let maiorPalindromo = "";

    for (let i = 0; i < s.length; i++) {

        let palindromo1 = expandirCentro(s, i, i);

        let palindromo2 = expandirCentro(s, i, i + 1);

        if (palindromo1.length > maiorPalindromo.length) {
            maiorPalindromo = palindromo1;
        }
        if (palindromo2. length > maiorPalindromo.length) {
            maiorPalindromo = palindromo2;
        }
    }

    return maiorPalindromo;
}



let str = read.question("Digite uma string: ");


console.log(`A naior substring palindromica eh: "${maiorSubstringPalidromica(str)}"`);