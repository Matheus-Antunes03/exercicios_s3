let somaPositivos = 0;
let somaNegativos = 0;

while (true) {
    let numero = parseInt(prompt("Digite um número positivo ou negativo (digite 0 para encerrar):"));

    if (numero === 0) {
        break;
    } else if (numero > 0) {
        somaPositivos += numero;
    } else {
        somaNegativos += numero;
    }
}

let somaTotal = somaPositivos + somaNegativos;

console.log("Soma dos números positivos: " + somaPositivos);
console.log("Soma dos números negativos: " + somaNegativos);
console.log("Soma total: " + somaTotal);