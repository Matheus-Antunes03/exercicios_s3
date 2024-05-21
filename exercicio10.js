let golsTimeA = Math.floor(Math.random() * 11);
let golsTimeB = Math.floor(Math.random() * 11);

console.log("Time A: " + golsTimeA + " gols");
console.log("Time B: " + golsTimeB + " gols");

if (golsTimeA > golsTimeB) {
    console.log("O Time A é o vencedor!");
} else if (golsTimeB > golsTimeA) {
    console.log("O Time B é o vencedor!");
} else {
    console.log("EMPATE!");
}