let valor1 = Math.floor(Math.random() * 101);
let valor2 = Math.floor(Math.random() * 101);

console.log("Valor 1: " + valor1);
console.log("Valor 2: " + valor2);

if (valor1 > valor2) {
    console.log("O maior valor é: " + valor1);
} else if (valor2 > valor1) {
    console.log("O maior valor é: " + valor2);
} else {
    console.log("Os valores são iguais.");
}
