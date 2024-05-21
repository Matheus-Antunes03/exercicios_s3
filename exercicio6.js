let valor1 = Math.floor(Math.random() * 101);
let valor2 = Math.floor(Math.random() * 101);
let valor3 = Math.floor(Math.random() * 101);

console.log("Valor 1: " + valor1);
console.log("Valor 2: " + valor2);
console.log("Valor 3: " + valor3);

let maior = valor1;
if (valor2 > maior) {
    maior = valor2;
}
if (valor3 > maior) {
    maior = valor3;
}

console.log("O maior valor é: " + maior);