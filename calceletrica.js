/*pedir o nome do eletrodoméstico, se vai usar wat ou kwh, saida nome, kwh por mes , valor em real*/
let precoKw = parseFloat(prompt("Digite o preço da sua região do Kwh: ")); // Preço do Kwh em reais.
let eletrodomestico = prompt("Digite o nome do seu eletrodomestico: ");
let potencia = Number(prompt("Informe a potência 1 - Watts ou 2 - Kw: "));
let tempo = parseInt(prompt("Digite o tempo de uso do seu eletrodomestico por dia (em horas): "));
let consumoMensal = 0;
if (potencia == 1){
    let potenciaWatts = parseFloat(prompt("Digite a potência do seu eletrodoméstico em Watts: "));
    consumoMensal = (potenciaWatts * tempo * 30) / 1000; // Comversão para Kilowatts.
}
else if(potencia == 2){
    let potenciaKw = parseFloat(prompt("Digite a potência do seu eletrodoméstico em Kw: "));
    consumoMensal = potenciaKw * tempo * 30; // Consumo de energia em Kwh.
}
let valorMensal = consumoMensal * precoKw; // Valor a ser pago em reais.

alert("O consumo mensal do seu " + eletrodomestico + " é de " + consumoMensal.toFixed(2) + " Kwh, e o valor a ser pago é de R$ " + valorMensal.toFixed(2));