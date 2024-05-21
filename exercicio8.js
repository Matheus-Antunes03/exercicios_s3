let valor1 = Math.floor(Math.random() * 101);
let valor2 = Math.floor(Math.random() * 101);
let valor3 = Math.floor(Math.random() * 101);

console.log("Valores: " + valor1 + ", " + valor2 + ", " + valor3);

if (valor1 > valor2) {
    [valor1, valor2] = [valor2, valor1];
}
if (valor2 > valor3) {
    [valor2, valor3] = [valor3, valor2];
}
if (valor1 > valor2) {
    [valor1, valor2] = [valor2, valor1];
}

console.log("Valores em ordem crescente: " + valor1 + ", " + valor2 + ", " + valor3);