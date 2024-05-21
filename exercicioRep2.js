let totalPeso1_10 = 0;
let totalPeso11_20 = 0;
let totalPeso21_30 = 0;
let totalPeso31_mais = 0;
let quantidade1_10 = 0;
let quantidade11_20 = 0;
let quantidade21_30 = 0;
let quantidade31_mais = 0;

for (let i = 0; i < 15; i++) {
    let idade = Math.floor(Math.random() * 100) + 1;
    let peso = Math.random() * 100;

    if (idade >= 1 && idade <= 10) {
        totalPeso1_10 += peso;
        quantidade1_10++;
    }
    if (idade >= 11 && idade <= 20) {
        totalPeso11_20 += peso;
        quantidade11_20++;
    }
    if (idade >= 21 && idade <= 30) {
        totalPeso21_30 += peso;
        quantidade21_30++;
    }
    if (idade > 30) {
        totalPeso31_mais += peso;
        quantidade31_mais++;
    }
}

console.log("Média de peso")

if (quantidade1_10 > 0) {
    let media1_10 = totalPeso1_10 / quantidade1_10;
    console.log("Pessoas de 1 a 10 anos: " + media1_10.toFixed(2));
}
if (quantidade11_20 > 0) {
    let media11_20 = totalPeso11_20 / quantidade11_20;
    console.log("Pessoas de 11 a 20 anos: " + media11_20.toFixed(2));
}
if (quantidade21_30 > 0) {
    let media21_30 = totalPeso21_30 / quantidade21_30;
    console.log("Pessoas de 21 a 30 anos: " + media21_30.toFixed(2));
}
if (quantidade31_mais > 0) {
    let media31_mais = totalPeso31_mais / quantidade31_mais;
    console.log("Pessoas com mais de 30 anos: " + media31_mais.toFixed(2));
}