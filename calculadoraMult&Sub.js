/*calculadora de multiplos e submultiplos*/
// let unidade e o outro let é o valor numerico e qual conversão? (Use vetor para facilitar a escolha do usuário)

let unidades = [10 ** 9, 10 ** 6, 10 ** 3, 1, 10 ** -3, 10 ** -6, 10 ** -9];
let ValorAtual = parseFloat(prompt("Digite o valor numérico que deseja converter: "));
let unidadeAtual = parseInt(prompt("Escolha a unidade atual do valor: \n1 - Giga (G)\n2 - Mega (M)\n3 - Kilo (k)\n4 - Unidade (u)\n5 - Milli (m)\n6 - Micro (µ)\n7 - Nano (n)"));
let unidadeDestino = parseInt(prompt("Escolha a unidade para a qual deseja converter: \n1 - Giga (G)\n2 - Mega (M)\n3 - Kilo (k)\n4 - Unidade (u)\n5 - Milli (m)\n6 - Micro (µ)\n7 - Nano (n)"));

let valorConvertido = ValorAtual * (unidades[unidadeAtual - 1] / unidades[unidadeDestino - 1]);

alert(ValorAtual + " na unidade escolhida é igual a " + valorConvertido + " na unidade de destino.");