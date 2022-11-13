function dados() {
    return {
        reset: function() {
            dado1 = undefined;
            dado2 = undefined;
        },
        tirarDados: function() {
            dado1 = Math.floor((Math.random() * 6) + 1);
            dado2 = Math.floor((Math.random() * 6) + 1);
        },
        imprimir: function() {
            if (dado1 == undefined && dado2 == undefined) {
                console.log("Por favor, tire los dados!!");
            } else {
                console.log(`Dado 1: ${dado1}`);
                console.log(`Dado 2: ${dado2}`);
            }
            if (dado1 == 6 && dado2 == 6) console.log("¡¡¡ PREMIO !!!");
        }
    };
}

var juegoDados = dados();


juegoDados.reset();
juegoDados.imprimir();
juegoDados.tirarDados();
juegoDados.imprimir();