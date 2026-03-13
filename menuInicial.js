let menu = prompt("Selecione a opção que deseja:\n 1 - Calculadora de consumo\n 2 - Calculadora de Mult e Sub\n 3 - Calculadora de resistores");
switch(menu){
    case 1:
        calculadoraConsumo();
        break;

    case 2:
        calculadoraMulteSub();
        break;

    case 3:
        calculadoraResitor();
        break;

    default:
        alert("Opção inválida!");
}