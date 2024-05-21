let maior = Number.MIN_SAFE_INTEGER;
let menor = Number.MAX_SAFE_INTEGER;

while (true) {
    let numero = parseInt(prompt("Digite um número inteiro e positivo (ou 0 para encerrar):"));

    if (numero < 0) {
        console.log("Valor inválido! Por favor, insira um valor inteiro e positivo.");
    } else if (numero === 0) {
        break;
    } else {
        if (numero > maior) {
            maior = numero;
        }
        if (numero < menor) {
            menor = numero;
        }
    }
}

console.log("Maior valor: " + maior);
console.log("Menor valor: " + menor);