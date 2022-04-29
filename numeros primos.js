function esDecimal (numero) {
    return numero !== Math.floor (numero);
}

function esPrimo (numero) {
    let div2 = 0;
    let div3 = 0;
    let div4 = 0;
    let div5 = 0;
    let div6 = 0;
    let div7 = 0;
    let div8 = 0;
    let div9 = 0;
    div2 = numero / 2
    div3 = numero / 3
    div4 = numero / 4
    div5 = numero / 5
    div6 = numero / 6
    div7 = numero / 7
    div8 = numero / 8
    div9 = numero / 9
    if (2 === numero) {
    return esDecimal (div3) && esDecimal (div4) && esDecimal (div5) && esDecimal (div6) && esDecimal (div7) && esDecimal (div8) && esDecimal (div9);
    }
    else if (3 === numero) {
        return esDecimal (div2) && esDecimal (div4) && esDecimal (div5) && esDecimal (div6) && esDecimal (div7) && esDecimal (div8) && esDecimal (div9);
    }
    else if (4 === numero) {
        return esDecimal (div2) && esDecimal (div3) && esDecimal (div5) && esDecimal (div6) && esDecimal (div7) && esDecimal (div8) && esDecimal (div9);
    }
    else if (5 === numero) {
        return esDecimal (div2) && esDecimal (div3) && esDecimal (div4) && esDecimal (div6) && esDecimal (div7) && esDecimal (div8) && esDecimal (div9);
    }
    else if (6 === numero) {
        return esDecimal (div2) && esDecimal (div3) && esDecimal (div4) && esDecimal (div5) && esDecimal (div7) && esDecimal (div8) && esDecimal (div9);
    }
    else if (7 === numero) {
        return esDecimal (div2) && esDecimal (div3) && esDecimal (div4) && esDecimal (div5) && esDecimal (div6) && esDecimal (div8) && esDecimal (div9);
    }
    else if (8 === numero) {
        return esDecimal (div2) && esDecimal (div3) && esDecimal (div4) && esDecimal (div5) && esDecimal (div6) && esDecimal (div7) && esDecimal (div9);
    }
    else if (9 === numero) {
        return esDecimal (div2) && esDecimal (div3) && esDecimal (div4) && esDecimal (div5) && esDecimal (div6) && esDecimal (div7) && esDecimal (div8);
    }
    else {
        return esDecimal (div2) && esDecimal (div3) && esDecimal (div4) && esDecimal (div5) && esDecimal (div6) && esDecimal (div7) && esDecimal (div8) && esDecimal (div9);
    }
}
let identificadorIntervaloDeTiempo;

function repetirCadaSegundo() {
  identificadorIntervaloDeTiempo = setInterval(todosLosPrimos, 200);
}
var numero = 2;
function todosLosPrimos () {
        if (esPrimo (numero)) {
            console.log (numero);
        }
        numero = numero + 1;
    }
function numeroMersenne (exponenteNPrimo) {
    return Math.pow(2, exponenteNPrimo) - 1;
}