let faixa1_15 = 0;
let faixa16_30 = 0;
let faixa31_45 = 0;
let faixa46_60 = 0;
let faixa61_mais = 0;

for (let i = 0; i < 15; i++) {
    let idade = Math.floor(Math.random() * 100) + 1;
    if (idade >= 1 && idade <= 15) {
        faixa1_15++;
    } else if (idade >= 16 && idade <= 30) {
        faixa16_30++;
    } else if (idade >= 31 && idade <= 45) {
        faixa31_45++;
    } else if (idade >= 46 && idade <= 60) {
        faixa46_60++;
    } else {
        faixa61_mais++;
    }
}

console.log("1 a 15 anos: " + faixa1_15 + " pessoas");
console.log("16 a 30 anos: " + faixa16_30 + " pessoas");
console.log("31 a 45 anos: " + faixa31_45 + " pessoas");
console.log("46 a 60 anos: " + faixa46_60 + " pessoas");
console.log("61 anos ou mais: " + faixa61_mais + " pessoas");

let totalPessoas = faixa1_15 + faixa16_30 + faixa31_45 + faixa46_60 + faixa61_mais;

console.log("Porcentagem de cada faixa etária:");
console.log("1 a 15 anos: " + ((faixa1_15 / totalPessoas) * 100).toFixed(2) + "%");
console.log("16 a 30 anos: " + ((faixa16_30 / totalPessoas) * 100).toFixed(2) + "%");
console.log("31 a 45 anos: " + ((faixa31_45 / totalPessoas) * 100).toFixed(2) + "%");
console.log("46 a 60 anos: " + ((faixa46_60 / totalPessoas) * 100).toFixed(2) + "%");
console.log("61 anos ou mais: " + ((faixa61_mais / totalPessoas) * 100).toFixed(2) + "%");