const num_alunos = 6;
let somaMedias = 0;
let numAprovados = 0;
let numReprovados = 0;

for (let i = 1; i <= num_alunos; i++) {
    let nota1 = parseFloat(prompt("Digite a primeira nota do aluno ${i}:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota do aluno ${i}:"));

    let media = (nota1 + nota2) / 2;
    somaMedias += media;

    console.log("Média do aluno ${i}: ${media.toFixed(1)}");

    if (media >= 0 && media <= 5.0) {
        console.log("Mensagem: Reprovado");
        numReprovados++;
    } else if (media >= 5.1 && media <= 6.9) {
        console.log("Mensagem: Recuperação");
    } else if (media >= 7.0 && media <= 10.0) {
        console.log("Mensagem: Aprovado");
        numAprovados++;
    }
}

let mediaGeral = somaMedias / num_alunos;

console.log("\nTotal de alunos aprovados: ${numAprovados}");
console.log("Total de alunos reprovados: ${numReprovados}");
console.log("Média geral do programa: ${mediaGeral.toFixed(1)}");
