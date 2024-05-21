let somaAlturas = 0;
let contadorPessoas = 0;

while (true) {
    let idade = parseInt(prompt("Digite a idade da pessoa (ou digite um número negativo ou zero para encerrar):"));

    if (idade <= 0) {
        break;
    }

    let altura = parseFloat(prompt("Digite a altura da pessoa (em metros):"));

    if (idade > 50) {
        somaAlturas += altura;
        contadorPessoas++;
    }
}

if (contadorPessoas > 0) {
    let mediaAlturas = somaAlturas / contadorPessoas;
    console.log("Média das alturas das pessoas com mais de 50 anos: ${mediaAlturas.toFixed(2)} metros");
} else {
    console.log("Não há pessoas com mais de 50 anos para calcular a média de altura.");
}