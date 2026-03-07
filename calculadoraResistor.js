//inputs = se é 4 ou 5 faixas,cores das faixas.

let numFaixas = parseInt(prompt("Digite o número de faixas do resistor (4 ou 5): "));
let cores = ["Preto", "Marrom", "Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Violeta", "Cinza", "Branco"];
let tolerancias = ["Dourado", "Prata"];

if (numFaixas === 4) {
    let faixa1 = parseInt(prompt("Digite a cor da primeira faixa: 0 - Preto, 1 - Marrom, 2 - Vermelho, 3 - Laranja, 4 - Amarelo, 5 - Verde, 6 - Azul, 7 - Violeta, 8 - Cinza, 9 - Branco: "));
    let faixa2 = parseInt(prompt("Digite a cor da segunda faixa: 0 - Preto, 1 - Marrom, 2 - Vermelho, 3 - Laranja, 4 - Amarelo, 5 - Verde, 6 - Azul, 7 - Violeta, 8 - Cinza, 9 - Branco: "));
    let multiplicador = parseInt(prompt("Digite a cor do multiplicador: 0 - Preto, 1 - Marrom, 2 - Vermelho, 3 - Laranja, 4 - Amarelo, 5 - Verde, 6 - Azul, 7 - Violeta, 8 - Cinza, 9 - Branco): "));
    let tolerancia = parseInt(prompt("Digite a cor da tolerância: 10 - Dourado, 11 - Prata: "));

    let valorResistor = ((faixa1 * 10) + faixa2) * Math.pow(10, multiplicador);
    let toleranciaValor = tolerancias[tolerancia - 10];

    alert("O valor do resistor é: " + valorResistor + " ohms com tolerância de " + toleranciaValor);
}
else if (numFaixas === 5) {
    let faixa1 = parseInt(prompt("Digite a cor da primeira faixa: 0 - Preto, 1 - Marrom, 2 - Vermelho, 3 - Laranja, 4 - Amarelo, 5 - Verde, 6 - Azul, 7 - Violeta, 8 - Cinza, 9 - Branco): "));
    let faixa2 = parseInt(prompt("Digite a cor da segunda faixa: 0 - Preto, 1 - Marrom, 2 - Vermelho, 3 - Laranja, 4 - Amarelo, 5 - Verde, 6 - Azul, 7 - Violeta, 8 - Cinza, 9 - Branco: "));
    let faixa3 = parseInt(prompt("Digite a cor da terceira faixa: 0 - Preto, 1 - Marrom, 2 - Vermelho, 3 - Laranja, 4 - Amarelo, 5 - Verde, 6 - Azul, 7 - Violeta, 8 - Cinza, 9 - Branco: "));
    let multiplicador = parseInt(prompt("Digite a cor do multiplicador: 0 - Preto, 1 - Marrom, 2 - Vermelho, 3 - Laranja, 4 - Amarelo, 5 - Verde, 6 - Azul, 7 - Violeta, 8 - Cinza, 9 - Branco: "));
    let tolerancia = parseInt(prompt("Digite a cor da tolerância: 10 - Dourado, 11 - Prata: "));

    let valorResistor = ((faixa1 * 100) + (faixa2 * 10) + faixa3) * Math.pow(10, multiplicador);
    let toleranciaValor = tolerancias[tolerancia - 10];

    alert("O valor do resistor é: " + valorResistor + " ohms com tolerância de " + toleranciaValor);
} else {
    alert("Número de faixas inválido. Por favor, escolha 4 ou 5 faixas.");
}
