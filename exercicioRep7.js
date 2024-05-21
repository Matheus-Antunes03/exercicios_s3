let numCandidatas = 0;
let numCandidatos = 0;
let somaIdadeHomensComExperiencia = 0;
let numHomensComExperiencia = 0;
let numHomensMaisDe45Anos = 0;
let numMulheresComExperienciaMenos35 = 0;
let menorIdadeMulheresComExperiencia = Infinity;

while (true) {
    let idade = parseInt(prompt("Digite a idade do candidato (ou 0 para encerrar):"));
    if (idade === 0) {
        break;
    }

    let sexo = parseInt(prompt("Digite o sexo do candidato (1 para Masculino, 2 para Feminino):"));
    let experiencia = parseInt(prompt("Digite a experiência do candidato (1 para Sim, 2 para Não):"));

    if (sexo === 1) {
        numCandidatos++;
        if (experiencia === 1) {
            numHomensComExperiencia++;
            somaIdadeHomensComExperiencia += idade;
            if (idade > 45) {
                numHomensMaisDe45Anos++;
            }
        }
    } else if (sexo === 2) {
        numCandidatas++;
        if (idade < 35 && experiencia === 1) {
            numMulheresComExperienciaMenos35++;
        }
        if (experiencia === 1 && idade < menorIdadeMulheresComExperiencia) {
            menorIdadeMulheresComExperiencia = idade;
        }
    }
}

let mediaIdadeHomensComExperiencia = somaIdadeHomensComExperiencia / numHomensComExperiencia;
let porcentagemHomensMaisDe45Anos = (numHomensMaisDe45Anos / numHomensComExperiencia) * 100;

console.log("Número de candidatas: " + numCandidatas);
console.log("Número de candidatos: " + numCandidatos);
console.log("Idade média dos homens com experiência: " + mediaIdadeHomensComExperiencia.toFixed(2));
console.log("Porcentagem de homens com mais de 45 anos: " + porcentagemHomensMaisDe45Anos.toFixed(2) + "%");
console.log("Número de mulheres com menos de 35 anos e experiência: " + numMulheresComExperienciaMenos35);
console.log("Menor idade entre mulheres com experiência: " + (menorIdadeMulheresComExperiencia === Infinity ? "Nenhuma" : menorIdadeMulheresComExperiencia));