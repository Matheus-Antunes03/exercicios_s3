let nota1 = Math.random() * 10;
let nota2 = Math.random() * 10;

let media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log("Aprovado! Média: " + media.toFixed(2));
} else {
    console.log("Reprovado. Média: " + media.toFixed(2));
}