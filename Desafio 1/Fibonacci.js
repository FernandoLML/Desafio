const read = require ("readline-sync")

function fibonacci(fibo) {

    if ( fibo === 0 || fibo < 0){
        return("Entrada invalida, digite um número maior que zero: ")

    } else if (fibo === 1) {

        return 0;

    } else if (fibo === 2) {

        return 1;

    }

        let a = 0, b =1;
        for (i = 3; i <= fibo; i++){
            let temp = a + b;
            a = b;
            b = temp;
        }    

        return b;

}
    let fibo = parseInt(read.question("Informe qual numero da sequencia de Fibonacci deseja ver: "));
    console.log(`O ${fibo}° termo da sequencia de Fibonacci é: ${fibonacci(fibo)}`);