⚡ Calculadora de Consumo de EnergiaUma ferramenta interativa desenvolvida em JavaScript para calcular o consumo mensal de eletrodomésticos e o impacto financeiro na conta de luz.

🎯 Sobre o ProjetoO objetivo deste script é automatizar o cálculo de gasto energético de aparelhos domésticos. Ele permite que o usuário insira a potência conforme consta no manual ou etiqueta do produto (seja em Watts ou kW) e receba o valor projetado para o mês.

✨ FuncionalidadesIdentificação do Aparelho: Entrada personalizada com o nome do eletrodoméstico.Conversão Automática: Suporte para potências em Watts (W) com conversão interna para kWh.Cálculo de Ciclo Mensal: Projeção baseada em um uso contínuo por 30 dias.Estimativa de Custo: Cálculo do valor em Reais (R$) baseado na tarifa local.

📐 Lógica de CálculoO sistema processa as informações utilizando as seguintes bases matemáticas:Potência em Watts: O valor é dividido por $1000$ para converter em Kilowatts.Consumo Mensal:$$Consumo (kWh) = Potência (kW) \times Horas\ de\ Uso \times 30\ dias$$Custo Mensal:$$Valor (R\$) = Consumo (kWh) \times Tarifa\ (R\$)$$

🛠️ TecnologiasLinguagem: JavaScript (ES6+)Interface: Browser (Diálogos nativos prompt e alert)Nota: A tarifa base utilizada no script é de R$ 0,90 por kWh, mas este valor pode ser alterado diretamente no código para refletir a tarifa da sua região.