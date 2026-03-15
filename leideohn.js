const CalculadoraOhm = {
    inputs: {
        v: document.getElementById('ohm-v'),
        r: document.getElementById('ohm-r'),
        i: document.getElementById('ohm-i')
    },
    display: document.getElementById('res-ohm'),

    calcular: function(origem) {
        let v = parseFloat(this.inputs.v.value);
        let r = parseFloat(this.inputs.r.value);
        let i = parseFloat(this.inputs.i.value);

        if (origem !== 'v' && !isNaN(r) && !isNaN(i)){
            v = r * i;
            this.inputs.v.value = v.toFixed(2);
            this.atualizarStatus(`Tensão: ${v.toFixed(2)} V`);
        } 
        else if (origem !== 'r' && !isNaN(v) && !isNaN(i)){
            if (i === 0) return;
            r = v / i;
            this.inputs.r.value = r.toFixed(2);
            this.atualizarStatus(`Resistência: ${r.toFixed(2)} Ω`);
        } 
        else if (origem !== 'i' && !isNaN(v) && !isNaN(r)){
            if (r === 0) return;
            i = v / r;
            this.inputs.i.value = i.toFixed(3);
            this.atualizarStatus(`Corrente: ${i.toFixed(3)} A (${(i * 1000).toFixed(1)} mA)`);
        }
    },

    atualizarStatus: function(texto){
        if (this.display) {
            this.display.innerHTML = `<b>${texto}</b>`;
        }
    }
};