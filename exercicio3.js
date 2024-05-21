let anoAtual = new Date().getFullYear();
let anoNascimento = Math.floor(Math.random() * (anoAtual - 1900 + 1)) + 1900;
let idade = anoAtual - anoNascimento;

if (idade >= 16) {
    console.log("Você tem " + idade + " anos. Poderá votar este ano.");
} else {
    console.log("Você tem " + idade + " anos. Não poderá votar este ano.");
}