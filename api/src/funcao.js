function calcularIMC(a,b) {

    if ((a<=0) || (b<=0)) throw new Error('Valor Errado');
    console.log("peso:", a);
    console.log("altura:", b);
    return a / (b*b);

}

module.exports = { calcularIMC };
