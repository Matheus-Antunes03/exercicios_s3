let valor1 = Math.floor(Math.random() * 101);
let valor2 = Math.floor(Math.random() * 101);
let valor3 = Math.floor(Math.random() * 101);

console.log("Valor 1: " + valor1);
console.log("Valor 2: " + valor2);
console.log("Valor 3: " + valor3);

let somaDosMaiores;

if (valor1 >= valor2 && valor1 >= valor3) {
    somaDosMaiores = valor1 + Math.max(valor2, valor3);
} else if (valor2 >= valor1 && valor2 >= valor3) {
    somaDosMaiores = valor2 + Math.max(valor1, valor3);
} else {
    somaDosMaiores = valor3 + Math.max(valor1, valor2);
}

console.log("A soma dos dois maiores valores é: " + somaDosMaiores);