const num_times = 40;
const num_jogadores = 23;

let somaPesoGeral = 0;
let somaIdadeGeral = 0;

for (let i = 1; i <= num_times; i++) {
    let somaPesoTime = 0;
    let somaIdadeTime = 0;

    console.log("\nTime ${i}:");
    for (let j = 1; j <= num_jogadores; j++) {
        let peso = parseFloat(prompt("Digite o peso do jogador ${j} (kg):"));
        let idade = parseInt(prompt("Digite a idade do jogador ${j}:"));

        somaPesoTime += peso;
        somaIdadeTime += idade;
    }

    let mediaPesoTime = somaPesoTime / num_jogadores;
    let mediaIdadeTime = somaIdadeTime / num_jogadores;

    console.log("Peso médio do time ${i}: ${mediaPesoTime.toFixed(2)} kg");
    console.log("Idade média do time ${i}: ${mediaIdadeTime.toFixed(2)} anos");

    somaPesoGeral += somaPesoTime;
    somaIdadeGeral += somaIdadeTime;
}

let mediaPesoGeral = somaPesoGeral / (num_times * num_jogadores);
let mediaIdadeGeral = somaIdadeGeral / (num_times * num_jogadores);

console.log("\nPeso médio geral: ${mediaPesoGeral.toFixed(2)} kg");
console.log("Idade média geral: ${mediaIdadeGeral.toFixed(2)} anos");